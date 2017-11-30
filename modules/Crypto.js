const crypto = require('crypto');

exports.cipher = (data) => {
    let cipher = crypto.createCipher('aes192', 'stream');
    return cipher.update(data, 'utf8', 'base64');
};

exports.decipher = (data) => {
    let decipher = crypto.createDecipher('aes192', 'stream');
    return decipher.update(data, 'base64', 'utf8');
};

exports.hash = (data) => {
    let hash = crypto.createHash('md5');
    return hash.update(data).digest('hex');
};
