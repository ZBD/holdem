var deck = require('./deck.js');

var io;
var gameSocket;

/**
 * init the holdem game
 * set up message listener
 *
 */
function initGame(sio, socket) {
    io = sio;
    gameSocket = socket;
    gameSocket.emit('connected', {message: "You are connected!"});

    gameSocket.on('hostCreateNewGame', hostCreateNewGame);
    gameSocket.on('hostNextRound', hostNextRound);

    gameSocket.on('playerJoinGame', playerJoinGame);
};


exports.initGame = initGame;
