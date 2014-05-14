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

/************************************************
 *	 	Host functions			*
 * 						*
 *						*
 ************************************************/

/**
 * The 'Create' button was clicked and 'hostCreateNewGame' event occurred.
 */
function hostCreateNewGame() {
    // Create a unique Socket.IO Room
    var thisGameId = ( Math.random() * 100000 ) | 0;

    // Return the Room ID (gameId) and the socket ID (mySocketId) to the browser client
    this.emit('newGameCreated', {gameId: thisGameId, mySocketId: this.id});

    // Join the Room and wait for the players
    this.join(thisGameId.toString());
};

/**
 * 
 *
 */


exports.initGame = initGame;
