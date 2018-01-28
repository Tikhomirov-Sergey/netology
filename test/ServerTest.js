const supertest = require('supertest');
const expect = require('chai').expect;

describe('REST API', () => {
    let server;

    before((done) => {

        setTimeout(() => {
                server = supertest.agent('http://localhost:3000');
                done();
            }, 1000);
    });

    it('GET /hello должен вернуть Hello stranger!', done => {
        server
            .get('/hello')
            .expect(200)
            .end((err, response) => {
            expect(response.text).to.equal('Hello stranger!');
            done();
        });
    });

    it('GET /hello/alex должен вернуть Hello, alex', done => {

        let name = 'alex';

        server
            .get(`/hello/${name}`)
            .expect(200)
            .end((err, response) => {
                expect(response.text).to.equal(`Hello, ${name}`);
                done();
            });
    });

    it('GET /sub/users/1 должен вернуть You requested URI: localhost/sub/users/1', done => {

        let url = '/sub/users/1';

        server
            .get(url)
            .expect(200)
            .end((err, response) => {
                expect(response.text).to.equal(`You requested URI: localhost${url}`);
                done();
            });
    });

    it('POST /post/ с телом запроса {"name":"Tom"}, должен вернуть JSON {"name":"Tom"}', done => {

        let json = {name:"Tom"};

        server
            .post(`/post/`)
            .expect(200)
            .send(json)
            .end((err, response) => {
                expect(response.text).to.equal(JSON.stringify(json));
                //console.log(err, response);
                done();
            });
    });

    it('POST /post/ с пустым телом запроса, должен вернуть ошибку 404 Not Found', done => {

        server
            .post(`/post/`)
            .expect(404)
            .end((err, response) => {
                expect(response.statusCode).to.equal(404);
                expect(response.text).to.equal('404 Not Found');
                done();
            });
    });

});
