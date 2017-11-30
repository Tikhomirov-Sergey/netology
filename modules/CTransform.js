const Transform = require('stream').Transform;

module.exports = class CTransform extends Transform {

    constructor(transform, options) {
        super(options);
        this.store = [];
        this.transform = transform;
    }

    _transform(chunk, encoding, callback) {
        this.store.push(chunk);
        callback();
    }

    _flush(done) {
        let result = this.transform(this.store.toString());
        this.push(result);

        this.store = null;

        done();
    }
};
