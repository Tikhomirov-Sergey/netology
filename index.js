var express = require('express');
var path = require('path');

var app = express();
var server = require('http').createServer(app);

server.listen(3000);

app.use(express.static(path.join(__dirname, 'app/')));


