
const https = require('https');

module.exports = (url) => {
    https.get(url,res=> {
        console.log(`Статус ответа: ${res.statusCode}`);
        return res
    });
};
