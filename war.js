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



//Create an array for each players pile where they play cards
let playerOnePile = [];
let playerTwoPile = [];


//Make function to run the game!

    //Put both players put top card of deck into a pile
    //Compare cards in the pile for higher score
    //Player who plays card w/ higher score takes entire pile into their deck
    //If cards in pile are = to one another engage in war
    //Both players put next 3 cards from their deck facedown into the pile
    //Both players play next card from top of deck into pile
    //Player with highest card takes entire pile 
    //Continue game until one player has 52 cards and one has 0
    //Player with 52 cards wins, player with 0 cards loses.

//Function for cards in play
let cardsInPlay = () => {
    playerOnePile.unshift(playerOneDeck[0])
    playerOneDeck.shift();
    playerTwoPile.unshift(playerTwoDeck[0])
    playerTwoDeck.shift();

    console.log(`Player One played a ${playerOnePile[0].rank} of ${playerOnePile[0].suit} 
    and Player Two played a ${playerTwoPile[0].rank} of ${playerTwoPile[0].suit}`);
}
//End of one turn 


//Create regular war functionality
let playGame = () => {
    cardsInPlay();
        if (playerOnePile[0].rank > playerTwoPile[0].rank) {
            playerOneDeck.push(playerOnePile[0], playerTwoPile[0]);
            playerOnePile = [];
            playerTwoPile = [];
            
            console.log(`Player One WINS - card amount: ${playerOneDeck.length}`);
            console.log(`     Player Two - card amount: ${playerTwoDeck.length}`);
     } else if (playerOnePile[0].rank < playerTwoPile[0].rank) {
            playerTwoDeck.push(playerTwoPile[0], playerOnePile[0]);
            playerOnePile = [];
            playerTwoPile = [];

            console.log(`Player Two WINS - card amount ${playerTwoDeck.length}`);
            console.log(`     Player One - card amount ${playerOneDeck.length}`);
     } else {
         thisIsWar();
     }
}

let thisIsWar = () => {
    console.log("WAR - What is it good for!");
    if (playerOneDeck.length < 4) {
        console.log(`Player One has fallen to ${playerOneDeck.length} cards and must accept defeat. PLAYER TWO WINS! *ENDGAME*`);
    } else if (playerTwoDeck.length < 4) {
        console.log(`Player Two has fallen to ${playerTwoDeck.length} cards and must accept defeat. PLAYER ONE WINS! *ENDGAME*`);
    } else {
        cardsInPlay();
        cardsInPlay();
        cardsInPlay();
        cardsInPlay();
        
        console.log(`Player One draws 3 cards facedown and plays a ${playerOnePile[0].rank} of ${playerOnePile[0].suit}`);
        console.log(`Player Two draws 3 cards facedown and plays a ${playerTwoPile[0].rank} of ${playerTwoPile[0].suit}`);
        evaluateWar();
    }
}

//How to confirm at the end of war the standings and proceedings
let evaluateWar = () => {
    if (playerOnePile[0].rank > playerTwoPile[0].rank) {
        playerOneDeck.push(...playerOnePile, ...playerTwoPile);
        playerOnePile = [];
        playerTwoPile = [];
        
        console.log(`Player One WINS the WAR - card amount: ${playerOneDeck.length}`);
        console.log(`     Player Two - card amount: ${playerTwoDeck.length}`);
 } else if (playerOnePile[0].rank < playerTwoPile[0].rank) {
        playerTwoDeck.push(...playerTwoPile, ...playerOnePile);
        playerOnePile = [];
        playerTwoPile = [];

        console.log(`Player Two WINS the WAR - card amount ${playerTwoDeck.length}`);
        console.log(`     Player One - card amount ${playerOneDeck.length}`);
 } else {
     thisIsWar();
 }
}




















// function startGame() {
//     for (let i = 0, j = 0; i < playerOneDeck.length, j < playerTwoDeck.length; i++, j++) {
//         if (playerOneDeck[i].score > playerTwoDeck[j].score) {
//             //Add players titles to each round of play
//             console.log("Player 1: " + playerOneDeck[i].rank + " of " + playerOneDeck[i].suit + " " + 
//             "Player 2: " + playerTwoDeck[j].rank + " of " + playerTwoDeck[j].suit);
//             console.log("Player One WINS!");
//             //Set up conditional for player one win, now add cards to their deck from round
//             playerOneDeck.shift(playerOneDeck[i]);
//             playerTwoDeck.shift(playerTwoDeck[j]);
//             playerOneDeck.push(playerOneDeck[i]);
//             playerOneDeck.push(playerTwoDeck[j]);
            

//             //Give indication of each players card amount
//             console.log("Player 1 has: " + playerOneDeck.length + "cards" + " " + 
//             "Player 2 has: " + playerTwoDeck.length + "cards");

//         } //Set up else for player two win and add cards to their deck from round
//         else if (playerOneDeck[i].score < playerTwoDeck[j].score) {
//             console.log("Player 1: " + playerOneDeck[i].rank + " of " + playerOneDeck[i].suit + " " + 
//             "Player 2: " + playerTwoDeck[j].rank + " of " + playerTwoDeck[j].suit);
//             console.log("Player Two WINS!");
//             playerTwoDeck.shift(playerTwoDeck[j]);
//             playerOneDeck.shift(playerOneDeck[i]);

//             playerTwoDeck.push(playerOneDeck[i]);
//             playerTwoDeck.push(playerTwoDeck[j]);

        
//              //Give indication of each players card amount
//              console.log("Player 1 has: " + playerOneDeck.length + "cards" + " " + 
//              "Player 2 has: " + playerTwoDeck.length + "cards");

//         } //Set up else for potential war scenario, score[i] = score[j]
//         else if (playerOneDeck[i].score === playerTwoDeck[j].score) {
//             console.log("WAR...what is it good for");
//             console.log("Player 1: " + playerOneDeck[i].rank + " of " + playerOneDeck[i].suit + " " + 
//             "Player 2: " + playerTwoDeck[j].rank + " of " + playerTwoDeck[j].suit);
//             //Another conditional to account for extra cards being played in war scenario
//             if (playerOneDeck[i + 1].score > playerTwoDeck[j + 1].score) {
//                 playerOneDeck.shift(playerOneDeck[i]);
//                 playerOneDeck.shift(playerOneDeck[i + 1]);
//                 playerOneDeck.shift(playerOneDeck[i +2]);
//                 playerOneDeck.shift(playerOneDeck[i +3]);
                
//                 playerTwoDeck.shift(playerTwoDeck[j]);
//                 playerTwoDeck.shift(playerTwoDeck[j + 1]);
//                 playerTwoDeck.shift(playerTwoDeck[j +2]);
//                 playerTwoDeck.shift(playerTwoDeck[j +3]);

//                 playerOneDeck.push(playerOneDeck[i]);
//                 playerOneDeck.push(playerOneDeck[i + 1]);
//                 playerOneDeck.push(playerOneDeck[i +2]);
//                 playerOneDeck.push(playerOneDeck[i +3]);

//                 playerOneDeck.push(playerTwoDeck[j]);
//                 playerOneDeck.push(playerTwoDeck[j +1]);
//                 playerOneDeck.push(playerTwoDeck[j + 2]);
//                 playerOneDeck.push(playerTwoDeck[j + 3]);

//                  //Give indication of each players card amount
//             console.log("Player 1 has: " + playerOneDeck.length + "cards" + " " + 
//             "Player 2 has: " + playerTwoDeck.length + "cards");

//             } else {
//                  playerTwoDeck.shift(playerTwoDeck[j]);
//                 playerTwoDeck.shift(playerTwoDeck[j + 1]);
//                 playerTwoDeck.shift(playerTwoDeck[j +2]);
//                 playerTwoDeck.shift(playerTwoDeck[j +3]);

//                 playerOneDeck.shift(playerOneDeck[i]);
//                 playerOneDeck.shift(playerOneDeck[i + 1]);
//                 playerOneDeck.shift(playerOneDeck[i +2]);
//                 playerOneDeck.shift(playerOneDeck[i +3]);
            
//                 playerTwoDeck.push(playerOneDeck[i]);
//                 playerTwoDeck.push(playerOneDeck[i + 1]);
//                 playerTwoDeck.push(playerOneDeck[i +2]);
//                 playerTwoDeck.push(playerOneDeck[i +3]);

//                 playerTwoDeck.push(playerTwoDeck[j]);
//                 playerTwoDeck.push(playerTwoDeck[j +1]);
//                 playerTwoDeck.push(playerTwoDeck[j + 2]);
//                 playerTwoDeck.push(playerTwoDeck[j + 3]);


//                  //Give indication of each players card amount
//             console.log("Player 1 has: " + playerOneDeck.length + "cards" + " " + 
//             "Player 2 has: " + playerTwoDeck.length + "cards");
//             }
               
//             }
//     }
// }

// // console.log(startGame());

// function checkForWinner() {
//     if (playerOneDeck.length === 52) {
//         console.log("Player Two VICTORIOUS!")
//     } else if (playerTwoDeck.length === 52) {
//         console.log("Player Two PREVAILS!")
//     } else {
//         startGame();
//     }
// }
 

// startGame();
// console.log(gameOver());
// checkForWinner();





















