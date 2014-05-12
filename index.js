var express = require('express');
var path = require('path');
var holdem = require('./holdem');
var app = express();

app.configure(function() {
    //app.use(express.logger('dev'));
    app.use(express.static(path.join(__dirname, 'public')));
});

var port = Number(process.env.PORT || 5000);
var server = require('http').createServer(app).listen(port);
var io = require('socket.io').listen(server);

io.set('log level', 1);
io.sockets.on('connection', function(socket) {
    console.log('client connected');
    holdem.initGame(io, socket);
});

