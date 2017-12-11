
module.exports = (data) => {

    const url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
    const key = 'trnsl.1.1.20160723T183155Z.f2a3339517e26a3c.d86d2dc91f2e374351379bb3fe371985273278df';
    const lang = 'ru-en';

    let arr = data.toString().split('&');
    let params = {};
    arr.forEach((item) => {
        let values = item.split('=');
        params[values[0]] = values[1];
    });

    return `${url}?key=${key}&text=${params['text']}&lang=${lang}`;
};

