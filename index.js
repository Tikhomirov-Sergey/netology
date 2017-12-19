var express = require('express');
var path = require('path');

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(3000);

app.use(express.static(path.join(__dirname, 'src/public')));

io.on('connection', function (socket) {
  var addedUser = false;

    socket.on('add user', function (username) {

        if (addedUser) return;

        socket.username = username;
        addedUser = true;

        socket.emit('enterToRoom');

        socket.broadcast.emit('userJoined', {
            username: socket.username
        });
    });

  socket.on('newMessage', function (message) {
      io.sockets.emit('newMessage', {
      username: socket.username,
      message: message
    });
  });

  socket.on('disconnect', function () {
    if (addedUser) {
      socket.broadcast.emit('userLeft', {
        username: socket.username
      });
    }
  });
});
