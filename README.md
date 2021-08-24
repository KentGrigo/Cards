# Cards

## What is this?
This is a test of the fairness of shuffling cards in JavaScript based on the Fisher-Yates shuffle and the in-built *psuedo*random-number generator of JavaScript `Math.random`.

The motivation for testing the fairness is due to the number of permutations of cards being 52! = 8 * 10^67, while JavaScript respresent numbers according to IEEE 754, which limits floating points to 2^53 = 9 * 10^15.
This level of randomness is far from the number of deck permutations.

We test the randomness by making a sorted deck, shuffling it (using Fisher-Yates and `Math.random`), iterating the deck while checking how often a card is followed by another card.
This must be the simplest test: Can we by seeing one card deduce what the next card will be?


## How to run?
Open `index.html`, choose a number of cards and iterations, and press the button "Test fairness".
The page will then show how often a card was followed by another card, sorted by the largest first.
