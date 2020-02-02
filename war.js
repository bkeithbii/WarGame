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
        playerOne.Deck.push(warDeck.cards.slice(0, 26));
        playerTwo.Deck.push(warDeck.cards.slice(26, 52));
   }
}

//Make object for players in game
class Player {
    constructor(name, Deck, winDeck) {
        this.name = name
        this.Deck = []
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
// console.log(playerOne.Deck);
// console.log(playerTwo.Deck);
let playerOneDeck = playerOne.Deck[0];
let playerTwoDeck = playerTwo.Deck[0];
// console.log(playerOneDeck);
// console.log(playerTwoDeck);

// console.log(playerOneDeck[0].score);


//Make function to run the game!
function startGame() {
    for (let i = 0, j = 0; i < 26, j < 26; i++, j++) {
        if (playerOneDeck[i].score > playerTwoDeck[j].score) {
            //Add players titles to each round of play
            console.log("Player 1: " + playerOneDeck[i].rank + "of" + playerOneDeck[i].suit + " " + 
            "Player 2: " + playerTwoDeck[j].rank + "of" + playerTwoDeck[j].suit);
            console.log("Player One WINS!");
            //Set up conditional for player one win, now add cards to their deck from round
            playerOneDeck.push(playerOneDeck[i]);
            playerOneDeck.shift(playerOneDeck[i]);
            playerOneDeck.push(playerTwoDeck[j]);
            playerTwoDeck.shift(playerTwoDeck[j]);
        } //Set up else for player two win and add cards to their deck from round
        else if (playerOneDeck[i].score < playerTwoDeck[j].score) {
            console.log("Player 1: " + playerOneDeck[i].rank + "of" + playerOneDeck[i].suit + " " + 
            "Player 2: " + playerTwoDeck[j].rank + "of" + playerTwoDeck[j].suit);
            console.log("Player Two WINS!");
            playerTwoDeck.push(playerOneDeck[i]);
            playerTwoDeck.push(playerTwoDeck[j]);

            //Give indication of each players card amount
            console.log("Player 1 has: " + playerOneDeck.length + "cards" + " " + 
            "Player 2 has: " + playerTwoDeck.length + "cards");

            playerTwoDeck.shift(playerTwoDeck[j]);
            playerOneDeck.shift(playerOneDeck[i]);

        } //Set up else for potential war scenario, score[i] = score[j]
        else if (playerOneDeck[i].score === playerTwoDeck[j].score) {
            console.log("WAR...what is it good for");
            console.log("Player 1: " + playerOneDeck[i].rank + "of" + playerOneDeck[i].suit + " " + 
            "Player 2: " + playerTwoDeck[j].rank + "of" + playerTwoDeck[j].suit);
            //Another conditional to account for extra cards being played in war scenario
            if (playerOneDeck[i + 1].score > playerTwoDeck[j + 1].score) {
                playerOneDeck.push(playerOneDeck[i]);
                playerOneDeck.push(playerOneDeck[i + 1]);
                playerOneDeck.push(playerOneDeck[i +2]);
                playerOneDeck.push(playerOneDeck[i +3]);

                playerOneDeck.shift(playerOneDeck[i]);
                playerOneDeck.shift(playerOneDeck[i + 1]);
                playerOneDeck.shift(playerOneDeck[i +2]);
                playerOneDeck.shift(playerOneDeck[i +3]);

                playerOneDeck.push(playerTwoDeck[j]);
                playerOneDeck.push(playerTwoDeck[j +1]);
                playerOneDeck.push(playerTwoDeck[j + 2]);
                playerOneDeck.push(playerTwoDeck[j + 3]);

                playerTwoDeck.shift(playerTwoDeck[j]);
                playerTwoDeck.shift(playerTwoDeck[j + 1]);
                playerTwoDeck.shift(playerTwoDeck[j +2]);
                playerTwoDeck.shift(playerTwoDeck[j +3]);
            } else {
                playerTwoDeck.push(playerOneDeck[i]);
                playerTwoDeck.push(playerOneDeck[i + 1]);
                playerTwoDeck.push(playerOneDeck[i +2]);
                playerTwoDeck.push(playerOneDeck[i +3]);

                playerTwoDeck.push(playerTwoDeck[j]);
                playerTwoDeck.push(playerTwoDeck[j +1]);
                playerTwoDeck.push(playerTwoDeck[j + 2]);
                playerTwoDeck.push(playerTwoDeck[j + 3]);

                playerTwoDeck.shift(playerTwoDeck[j]);
                playerTwoDeck.shift(playerTwoDeck[j + 1]);
                playerTwoDeck.shift(playerTwoDeck[j +2]);
                playerTwoDeck.shift(playerTwoDeck[j +3]);

                playerOneDeck.shift(playerOneDeck[i]);
                playerOneDeck.shift(playerOneDeck[i + 1]);
                playerOneDeck.shift(playerOneDeck[i +2]);
                playerOneDeck.shift(playerOneDeck[i +3]);
            }
        }
    }
}

console.log(startGame());





















