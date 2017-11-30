const Writable = require('stream').Writable;

module.exports = class CWritable extends Writable {

    constructor(nameChunks, options) {
        super(options);
        this.nameChunks = nameChunks;
    }

    _write(chunk, encoding, done) {
        console.log(this.nameChunks + '  ' + chunk.toString());
        done();
    }
};

