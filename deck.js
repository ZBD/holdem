/*
var deck = ["2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH", "AH",
            "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD", "AD",
            "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS", "AS",
            "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC", "AC"
            ];
            */
var deck;
function getDeck() {
  deck = [
    {
        "number" : 2,
        "type" : "Heart"
    },
    {
        "number" : 3,
        "type" : "Heart"
    },
    {
        "number" : 4,
        "type" : "Heart"
    },
    {
        "number" : 5,
        "type" : "Heart"
    },
    {
        "number" : 6,
        "type" : "Heart"
    },
    {
        "number" : 7,
        "type" : "Heart"
    },
    {
        "number" : 8,
        "type" : "Heart"
    },
    {
        "number" : 9,
        "type" : "Heart"
    },
    {
        "number" : 10,
        "type" : "Heart"
    },
    {
        "number" : 11,
        "type" : "Heart"
    },
    {
        "number" : 12,
        "type" : "Heart"
    },
    {
        "number" : 13,
        "type" : "Heart"
    },
    {
        "number" : 14,
        "type" : "Heart"
    },
    {
        "number" : 2,
        "type" : "Diamond" 
    },
    {
        "number" : 3,
        "type" : "Diamond" 
    },
    {
        "number" : 4,
        "type" : "Diamond" 
    },
    {
        "number" : 5,
        "type" : "Diamond" 
    },
    {
        "number" : 6,
        "type" : "Diamond" 
    },
    {
        "number" : 7,
        "type" : "Diamond" 
    },
    {
        "number" : 8,
        "type" : "Diamond" 
    },
    {
        "number" : 9,
        "type" : "Diamond" 
    },
    {
        "number" : 10,
        "type" : "Diamond" 
    },
    {
        "number" : 11,
        "type" : "Diamond" 
    },
    {
        "number" : 12,
        "type" : "Diamond" 
    },
    {
        "number" : 13,
        "type" : "Diamond" 
    },
    {
        "number" : 14,
        "type" : "Diamond" 
    },
    {
        "number" : 2,
        "type" : "Spade" 
    },
    {
        "number" : 3,
        "type" : "Spade" 
    },
    {
        "number" : 4,
        "type" : "Spade" 
    },
    {
        "number" : 5,
        "type" : "Spade" 
    },
    {
        "number" : 6,
        "type" : "Spade" 
    },
    {
        "number" : 7,
        "type" : "Spade" 
    },
    {
        "number" : 8,
        "type" : "Spade" 
    },
    {
        "number" : 9,
        "type" : "Spade" 
    },
    {
        "number" : 10,
        "type" : "Spade" 
    },
    {
        "number" : 11,
        "type" : "Spade" 
    },
    {
        "number" : 12,
        "type" : "Spade" 
    },
    {
        "number" : 13,
        "type" : "Spade" 
    },
    {
        "number" : 14,
        "type" : "Spade" 
    },
    {
        "number" : 2,
        "type" : "Club" 
    },
    {
        "number" : 3,
        "type" : "Club" 
    },
    {
        "number" : 4,
        "type" : "Club" 
    },
    {
        "number" : 5,
        "type" : "Club" 
    },
    {
        "number" : 6,
        "type" : "Club" 
    },
    {
        "number" : 7,
        "type" : "Club" 
    },
    {
        "number" : 8,
        "type" : "Club" 
    },
    {
        "number" : 9,
        "type" : "Club" 
    },
    {
        "number" : 10,
        "type" : "Club" 
    },
    {
        "number" : 11,
        "type" : "Club" 
    },
    {
        "number" : 12,
        "type" : "Club" 
    },
    {
        "number" : 13,
        "type" : "Club" 
    },
    {
        "number" : 14,
        "type" : "Club" 
    }
    ];
   return deck;
}

var tableCards;

function shuffle() {
    var i, j, tmp;
    for (i=0; i<deck.length; i++) {
        j = Math.floor(Math.random() * (i+1));
        tmp = deck[i];
        deck[i] = deck[j];
        deck[j] = tmp;
    }
    return deck;
}

function getTableCards() {
    var card1 = deck.pop();
    var card2 = deck.pop();
    var card3 = deck.pop();
    var card4 = deck.pop();
    var card5 = deck.pop();
    tableCards = [card1, card2, card3, card4, card5];
    return tableCards;
}


function getPlayerCards() {
    var card1 = deck.pop();
    var card2 = deck.pop();
    return [card1, card2];
}

function evaluateHand(playerHand) {
    //High card

    //Pair

    //Two Pair

    //3 of a Kind

    //Straight

    //Flush

    //Full House

    //4 of a Kind

    //Straight Flush

}

getDeck();
console.log("Before shuffle");
console.log(deck);
console.log("\nAfter shuffle");
console.log(shuffle());
console.log(getTableCards());
console.log(getPlayerCards());

exports.shuffle = shuffle;
exports.getDeck = getDeck;
