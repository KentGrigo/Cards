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
    for (const card of this.cards) {
        console.log(card)
    }
}

// from is inclusive
// to is exclusive
function randomNumberBetween(from, to) {
    return Math.floor(Math.random() * (to - from)) + from
}

function swap(collection, index1, index2) {
    const temp = collection[index1]
    collection[index1] = collection[index2]
    collection[index2] = temp
}

function setupDeck(numberOfCards) {
    const cards = []
    for (var i = 0; i < numberOfCards; i++) {
        cards.push(i)
    }
    return new Deck(cards)
}

function run() {
    const numberOfCards = 52
    const deck = setupDeck(numberOfCards)
    deck.print()
    deck.shuffle()
    deck.print()
}

function testFairness() {
    numberOfCards = document.getElementById("numberOfCards").value
    numberOfIterations = document.getElementById("numberOfIterations").value

    const pairToOccurrences = {}
    for (var i = 0; i < numberOfIterations; i++) {
        const deck = setupDeck(numberOfCards)
        deck.shuffle()
        previousCard = null
        for (var cardNumber = 0; cardNumber < numberOfCards; cardNumber++) {
            var currentCard = deck.get(cardNumber)
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
        document.getElementById("result").value += pair + ", " + pairToOccurrences[pair] + "\n"
    }
}
