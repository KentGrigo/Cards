function Deck(cards) {
    this.cards = cards;
}

Deck.prototype.get = function(index) {
    return this.cards[index];
}

Deck.prototype.shuffle = function() {
    for (var i = this.cards.length - 1; 0 < i; i--) {
	var shuffledCardIndex = randomNumberBetween(0, i + 1);
	swap(this.cards, i, shuffledCardIndex);
    }
}

Deck.prototype.print = function() {
    for (var i = 0; i < this.cards.length; i++) {
	var card = this.cards[i];
	console.log(card);
    }
}

// from is inclusive
// to is exclusive
function randomNumberBetween(from, to) {
    return Math.floor(Math.random() * (to - from)) + from;
}

function swap(collection, index1, index2) {
    var temp = collection[index1];
    collection[index1] = collection[index2];
    collection[index2] = temp;
}

function setupDeck(numberOfCards) {
    var cards = [];
    for (var i = 0; i < numberOfCards; i++) {
	cards.push(i);
    }
    var deck = new Deck(cards);
    return deck;
}

function run() {
    var numberOfCards = 52;
    var deck = setupDeck(numberOfCards);
    deck.print();
    deck.shuffle();
    deck.print();
}


function testFairness(numberOfRuns, numberOfCards) {
    var table = [];
    for (var i = 0; i < numberOfCards; i++) {
	var row = [];
	for (var j = 0; j < numberOfCards; j++) {
	    row.push(0);
	}
	table.push(row);
    }

    for (var i = 0; i < numberOfRuns; i++) {
	var deck = setupDeck(numberOfCards);
	deck.shuffle();
	for (var j = 0; j < numberOfCards; j++) {
	    var card = deck.get(j);
	    table[j][card]++;
	}
    }

    for (var i = 0; i < numberOfCards; i++) {
	var row = "";
	for (var j = 0; j < numberOfCards; j++) {
	    var entry = "" + table[i][j];
	    if (row != "") {
		row += ", ";
	    }
	    row += entry;
	}
	console.log("Row #" + i + ": " + row);
    }
}
