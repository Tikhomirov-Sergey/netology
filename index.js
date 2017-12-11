const http = require('http');
const fs = require('fs');
const https = require('https');

const createUrl = require('./src/functions/createUrl');
const request = require('./src/modules/request');

const port = 3000;

function handler(req, res) {
    if(req.method === "GET"){
        fs.createReadStream('./src/templates/index.html').pipe(res);
    }
    else {
        req.on('data', function (data) {
            const url = createUrl(data);

            https.get(url,response=> {
                console.log(`Статус ответа: ${response.statusCode}`);
                response.pipe(res);
            });
        });
    }
}

const server = http.createServer();
server.on('error', err => console.error(err));
server.on('request', handler);

server.on('listening', () => { console.log('Start HTTP on port %d', port); });
server.listen(port);
