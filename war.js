//Build the card face
 class Card {
    constructor(suit, rank, score) {
        this.suit = suit
        this.rank = rank
        this.score = score
    }
}

//Build the deck of cards
class Deck {
    constructor() {
        this.length = length
        this.cards = []
           }                
    makeCards() {
    let suit = ["hearts", "spades", "clubs", "diamonds"]
    let rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]
    let score = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
       for (let i = 0; i < suit.length; i++) {
           for (let j = 0; j < rank.length; j++) {
               const currentCard = new Card(suit[i], rank[j], score[j])
                   this.cards.push(currentCard);
       }
   }
   }
   shuffle() {
       return warDeck.cards.sort(function(a, b){ return 0.5-Math.random(); })
   }
   distributeCards() {
        playerOne.currentDeck.push(warDeck.cards.slice(0, 26));
        playerTwo.currentDeck.push(warDeck.cards.slice(26, 52));
   }
   addCardsInPlay() {

   }
}

//Make object for players in game
class Player {
    constructor(name, currentDeck, winDeck) {
        this.name = name
        this.currentDeck = []
        this.winDeck = []
    }
}
let playerOne = new Player("Player 1");
let playerTwo = new Player("Player 2");


const warDeck = new Deck()
warDeck.makeCards();
// console.log(warDeck.cards);
//Deck of Cards has been made

//Next - SHUFFLE the deck 
warDeck.shuffle();
// console.log(warDeck.cards);
//This is a shuffled deck


//Deck dealt evenly amongst players
warDeck.distributeCards();
console.log(playerOne.currentDeck);
console.log(playerTwo.currentDeck);


//Draw a card from each players deck
// warDeck.addCardsInPlay();




















// //Create two players
// let playerOneDeck = [];
// let playerTwoDeck = [];

// //Divide the deck amongst the players
// playerOneDeck.push(warDeck.cards.slice(0, 26));
// playerTwoDeck.push(warDeck.cards.slice(26, 52));

// // console.log(playerOneDeck);
// // console.log(playerTwoDeck);
// //Deck divided into two random stacks of 26

// //Deal cards
// let dealPlayerOne = () =>
//     console.log(playerOneDeck[Math.floor(Math.random()*playerOneDeck.length)]);

// let dealPlayerTwo = () => 
//     console.log(playerTwoDeck[Math.floor(Math.random()*playerTwoDeck.length)]);

// dealPlayerOne();
// dealPlayerTwo();
// //Cards dealt amongst players



// //Create a function to start each turn



// //Random card draw
// //  console.log(warDeck.draw());
// //  console.log(warDeck.draw());

