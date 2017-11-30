const CReadable = require('./CStream/CReadable');
const CWritable = require('./CStream/CWritable');
const CTransform = require('./CStream/CTransform');


module.exports = class CStream {

    constructor() {

        this.getRandom = new CReadable();
        this.randomWrite = new CWritable("random");
        this.transform = new CTransform();
        this.transformWrite = new CWritable("transform");
    }

    start() {

        this.getRandom
            .on("data", (data) => {
                this.randomWrite.write(data);
            })

            .pipe(this.transform)
            .on("data", (data) => {
                this.transformWrite.write(data);
            })
            .on("error", () => {
                console.log("error");
                this.randomWrite.end();
                this.transformWrite.end();
                this.transform.error();
            });
    }
};
