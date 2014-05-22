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
    gameSocket.on('hostStartGame', hostStartGame);
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
 * host prepare the game 
 * Every player gets his hands of poker(2 cards), host gets 5 cards
 */
function hostStartGame(gameId) {
    var sock = this;
    var data = {
        mySocketId: sock.id,
        gameId: gameId
        };

    this.emit('newGameStarted', deck.getHostCards);
    io.sockets.in(data.gameId).emit('beginNewGame', data);
}


exports.initGame = initGame;
