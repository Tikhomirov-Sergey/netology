const Transform = require('stream').Transform;

const getRandom = require("../../functions/getRandom");

module.exports = class CTransform extends Transform {

    constructor(options) {
        super(options);
        this.stop = false;
    }

    _transform(chunk, encoding, callback) {
       let interval = setInterval(() => {
            if(!this.stop) {
                this.push(chunk);
                callback();
            } else {
                return clearInterval(interval);
            }
        }, 1000);
    }

    error() {
        this.stop = true;
    }
};
