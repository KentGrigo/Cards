function Deck(cards) {
    this.cards = cards
}

Deck.prototype.get = function (index) {
    return this.cards[index]
}

Deck.prototype.shuffle = function () {
    for (var i = this.cards.length - 1; 0 < i; i--) {
        var shuffledCardIndex = randomNumberBetween(0, i + 1)
        swap(this.cards, i, shuffledCardIndex)
    }
}

Deck.prototype.print = function () {
    for (var i = 0; i < this.cards.length; i++) {
        var card = this.cards[i]
        console.log(card)
    }
}

// from is inclusive
// to is exclusive
function randomNumberBetween(from, to) {
    return Math.floor(Math.random() * (to - from)) + from
}

function swap(collection, index1, index2) {
    var temp = collection[index1]
    collection[index1] = collection[index2]
    collection[index2] = temp
}

function setupDeck(numberOfCards) {
    var cards = []
    for (var i = 0; i < numberOfCards; i++) {
        cards.push(i)
    }
    var deck = new Deck(cards)
    return deck
}

function run() {
    var numberOfCards = 52
    var deck = setupDeck(numberOfCards)
    deck.print()
    deck.shuffle()
    deck.print()
}

function testFairness(numberOfRuns, numberOfCards) {
    var pairToOccurrences = {}
    for (var i = 0; i < numberOfRuns; i++) {
        var deck = setupDeck(numberOfCards)
        deck.shuffle()
        previousCard = null
        for (var j = 0; j < numberOfCards; j++) {
            var currentCard = deck.get(j)
            if (previousCard != null) {
                pair = previousCard + "->" + currentCard
                occurrences = pairToOccurrences[pair] || 0
                pairToOccurrences[pair] = occurrences + 1
            }
            previousCard = currentCard
        }
    }

    sortedPairs = Object.keys(pairToOccurrences).sort(function (a, b) {
        return pairToOccurrences[b] - pairToOccurrences[a]
    })
    for (const pair of sortedPairs) {
        console.log(pair, pairToOccurrences[pair])
    }
}
