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
// console.log(playerOne.currentDeck);
// console.log(playerTwo.currentDeck);
let playerOneDeck = playerOne.currentDeck[0];
let playerTwoDeck = playerTwo.currentDeck[0];
// console.log(playerOneDeck);
// console.log(playerTwoDeck);

console.log(playerOneDeck[0].score);


// //Make function to run the game!
// function startGame() {
//     for (let i = 0, j = 0; i < 26, j < 26; i++, j++) {
//         if (playerOne.currentDeck[i].score > playerTwo.currentDeck[j].score) {
//             console.log(playerOne.currentDeck[i].suit + playerOne.currentDeck[i].rank + " " + 
//             playerTwo.currentDeck[j].suit + playerTwo.currentDeck[j].rank);
//             console.log("Player One WINS!");
//             //Set up conditional for player one win, now add cards to their deck from round
//             playerOne.currentDeck.push(playerOne.currentDeck[i]);
//             playerOne.currentDeck.shift(playerOne.currentDeck[i]);
//             playerOne.currentDeck.push(playerTwo.currentDeck[j]);
//             playerTwo.currentDeck.shift(playerTwo.currentDeck[j]);
//         } //Set up else for player two win and add cards to their deck from round
//         else if (playerOne.currentDeck[i].score < playerTwo.currentDeck[j].score) {
//             console.log(playerOne.currentDeck[i].suit + playerOne.currentDeck[i].rank + " " + 
//             playerTwo.currentDeck[j].suit + playerTwo.currentDeck[j].rank);
//             console.log("Player Two WINS!");
//             playerTwo.currentDeck.push(playerOne.currentDeck[i]);
//             playerTwo.currentDeck.push(playerTwo.currentDeck[j]);
//             playerTwo.currentDeck.shift(playerTwo.currentDeck[j]);
//             playerOne.currentDeck.shift(playerOne.currentDeck[i]);
//         } //Set up else for potential war scenario, score[i] = score[j]
//         else if (playerOne.currentDeck[i].score === playerTwo.currentDeck[j].score) {
//             console.log("WAR...what is it good for");
//             console.log(playerOne.currentDeck[i].suit + playerOne.currentDeck[i].rank + " " + 
//             playerTwo.currentDeck[j].suit + playerTwo.currentDeck[j].rank);
//             //Another conditional to account for extra cards being played in war scenario
//             if (playerOne.currentDeck[i + 1].score > playerTwo.currentDeck[j + 1].score) {
//                 playerOne.currentDeck.push(playerOne.currentDeck[i]);
//                 playerOne.currentDeck.push(playerOne.currentDeck[i + 1]);
//                 playerOne.currentDeck.push(playerOne.currentDeck[i +2]);
//                 playerOne.currentDeck.push(playerOne.currentDeck[i +3]);

//                 playerOne.currentDeck.shift(playerOne.currentDeck[i]);
//                 playerOne.currentDeck.shift(playerOne.currentDeck[i + 1]);
//                 playerOne.currentDeck.shift(playerOne.currentDeck[i +2]);
//                 playerOne.currentDeck.shift(playerOne.currentDeck[i +3]);

//                 playerOne.currentDeck.push(playerTwo.currentDeck[j]);
//                 playerOne.currentDeck.push(playerTwo.currentDeck[j +1]);
//                 playerOne.currentDeck.push(playerTwo.currentDeck[j + 2]);
//                 playerOne.currentDeck.push(playerTwo.currentDeck[j + 3]);

//                 playerTwo.currentDeck.shift(playerTwo.currentDeck[j]);
//                 playerTwo.currentDeck.shift(playerTwo.currentDeck[j + 1]);
//                 playerTwo.currentDeck.shift(playerTwo.currentDeck[j +2]);
//                 playerTwo.currentDeck.shift(playerTwo.currentDeck[j +3]);
//             } else {
//                 playerTwo.currentDeck.push(playerOne.currentDeck[i]);
//                 playerTwo.currentDeck.push(playerOne.currentDeck[i + 1]);
//                 playerTwo.currentDeck.push(playerOne.currentDeck[i +2]);
//                 playerTwo.currentDeck.push(playerOne.currentDeck[i +3]);

//                 playerTwo.currentDeck.push(playerTwo.currentDeck[j]);
//                 playerTwo.currentDeck.push(playerTwo.currentDeck[j +1]);
//                 playerTwo.currentDeck.push(playerTwo.currentDeck[j + 2]);
//                 playerTwo.currentDeck.push(playerTwo.currentDeck[j + 3]);

//                 playerTwo.currentDeck.shift(playerTwo.currentDeck[j]);
//                 playerTwo.currentDeck.shift(playerTwo.currentDeck[j + 1]);
//                 playerTwo.currentDeck.shift(playerTwo.currentDeck[j +2]);
//                 playerTwo.currentDeck.shift(playerTwo.currentDeck[j +3]);

//                 playerOne.currentDeck.shift(playerOne.currentDeck[i]);
//                 playerOne.currentDeck.shift(playerOne.currentDeck[i + 1]);
//                 playerOne.currentDeck.shift(playerOne.currentDeck[i +2]);
//                 playerOne.currentDeck.shift(playerOne.currentDeck[i +3]);
//             }
//         }
//     }
// }

// console.log(startGame());





















