const Readable = require("stream").Readable;

const getRandom = require("../../functions/getRandom");

module.exports = class CReadable extends Readable {
    _read(size) {
        this.push(getRandom(1, 1000).toString());
    }
};
