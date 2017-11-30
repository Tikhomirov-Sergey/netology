const CTransform = require('./modules/CTransform');
const crypto = require('./modules/Crypto');
const fs = require('fs');

const input = fs.createReadStream("./data/input.txt");
const outputCipher = fs.createWriteStream("./data/cipher.txt");
const outputDecipher = fs.createWriteStream("./data/decipher.txt");
const outputHash = fs.createWriteStream("./data/hash.txt");
const cipher = new CTransform(crypto.cipher);
const decipher = new CTransform(crypto.decipher);
const hash = new CTransform(crypto.hash);


cipher.on("data", (data) => {
    console.log(data.toString());
    outputCipher.end(data);
});

decipher.on("data", (data) => {
    console.log(data.toString());
    outputDecipher.end(data);
});

input.on("data", t => console.log(t.toString()));

hash.on("data", t => console.log(t.toString()));


input.pipe(cipher).pipe(decipher).pipe(hash).pipe(outputHash);


/*Дополнительное задание*/

const CStream = require('./modules/CStream');

let stream = new CStream();
//stream.start(); Закомментил, чтобы не занимать консоль