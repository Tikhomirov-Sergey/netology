
let webinarChat =  require('./modules/WebinarChat');
let facebookChat = require('./modules/FacebookChat');
let vkChat =       require('./modules/VkChat');

setTimeout( ()=> {
    vkChat.close('Закрываю вконтакте...', "Чат вконтакте закрылся :(");
}, 10000 );

setTimeout( ()=> {
    facebookChat.close('Закрываю фейсбук, все внимание — вебинару!', "Чат фейсбук закрылся :(");
}, 15000 );

setTimeout( ()=> {
    webinarChat.close('Закрываю вебинар', "Чат вебинар закрылся :(");
}, 30000 );
