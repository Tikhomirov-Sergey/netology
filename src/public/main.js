let socket = io();

let setUsername = () => {

    let username = $('#login').val().trim();

    if (username) {
        socket.emit('add user', username);
    }
};

let showChat = () => {
  $('.container.login').css('display', 'none');
  $('.container.chat').css('display', 'block');

  $('#messageInput').focus();
};

class Message {

  showMessage(message, username) {

      let messageDiv = this.createMessage(message, username);

      $('.messages.container').append(messageDiv);
  }

  createMessage(message, username, date) {

      let row = this.createDiv('row');
      let card = this.createDiv('card col-9');
      let cardBody = this.createDiv('card-body');

      let usernameDiv = this.createUsernameTitle(username);
      let massageDiv = this.createMessageText(message);

      cardBody.append(usernameDiv);
      cardBody.append(massageDiv);

      card.append(cardBody);
      row.append(card);

      return row;
  };

  createDiv(className) {
      return $('<div>').addClass(className);
  }

  createUsernameTitle(userName) {
      return $('<h4>').addClass('card-title').text(userName);
  }

  createSubtitleTitle(date) {
      return $('<h4>').addClass('card-subtitle mb-2 text-muted').text(date);
  }

  createMessageText(message) {
      return $('<p>').addClass('card-text').text(message);
  }

  showSystemMessage(message) {

      let messageDiv = this.createSystemMessage(message);
      $('.messages.container').append(messageDiv);
  }

  createSystemMessage(message) {

      let row = this.createDiv('row');
      let card = this.createDiv('card col-9');
      let cardBody = this.createDiv('card-body');

      let subtitle = this.createSubtitleTitle(message);

      cardBody.append(subtitle);

      card.append(cardBody);
      row.append(card);

      return row;
  }
}

let sendMessage = () => {
    let messageInput = $('#messageInput');
    let message = messageInput.val().trim();

    if (message) {
        socket.emit('newMessage', message);
        messageInput.val('');
    }

    messageInput.focus();
};

socket.on('enterToRoom', function () {
   showChat();
});

socket.on('newMessage', function (data) {
   let message = new Message();
   message.showMessage(data.message, data.username);
});

socket.on('userJoined', function (data) {
    let message = new Message();
    message.showSystemMessage(`${data.username} присоединился к чату`);
});

socket.on('userLeft', function (data) {
    let message = new Message();
    message.showSystemMessage(`${data.username} отключился`);
});

$(() => {
    $('.container.login').on('keydown', (event) => {
        if(event.keyCode === 13) {
            setUsername();
            event.preventDefault();
            event.stopPropagation();
        }
            

    }); 

    $('.container.chat').on('keydown', (event) => {
        if(event.keyCode === 13) {
            sendMessage();
            event.preventDefault();
            event.stopPropagation();
        }
    });
});




