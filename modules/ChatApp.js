const EventEmitter = require('events');

let onClose = require('../Events/OnClose');
let onChatOnMessage = require('../Events/OnChatOnMessage');
let onPreparingForResponse = require('../Events/OnPreparingForResponse');

class ChatApp extends EventEmitter {
    /**
     * @param {String} title
     */
    constructor(title) {
        super();

        this.title = title;

        this.on('message', onChatOnMessage);
        this.prependOnceListener('message', onPreparingForResponse);
        this.once('close', onClose);

        setInterval(() => {
            this.emit('message', `${this.title}: ping-pong`);
        }, 1000);
    }

    close(warningMessage, closeMessage)  {
        console.log(warningMessage);
        this.removeListener('message', onChatOnMessage);
        this.emit('close', closeMessage);
    }
}

module.exports = ChatApp;