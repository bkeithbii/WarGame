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

//Function for WAR cards in play specifically 
let warCardsInPlay = () => {
    playerOnePile.unshift(playerOneDeck[0])
    playerOneDeck.shift();
    playerTwoPile.unshift(playerTwoDeck[0])
    playerTwoDeck.shift();

    console.log(`***W.A.R***`);
}

//Create regular war functionality
let playGame = () => {
    cardsInPlay();
        if (playerOnePile[0].score > playerTwoPile[0].score) {
            playerOneDeck.push(playerOnePile[0], playerTwoPile[0]);
            playerOnePile = [];
            playerTwoPile = [];
            
            console.log(`Player One WINS - card amount: ${playerOneDeck.length}`);
            console.log(`     Player Two - card amount: ${playerTwoDeck.length}`);
            determineWinner();
        } else if (playerOnePile[0].score < playerTwoPile[0].score) {
            playerTwoDeck.push(playerTwoPile[0], playerOnePile[0]);
            playerOnePile = [];
            playerTwoPile = [];

            console.log(`Player Two WINS - card amount ${playerTwoDeck.length}`);
            console.log(`     Player One - card amount ${playerOneDeck.length}`);
            determineWinner();
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
        warCardsInPlay();
        warCardsInPlay();
        warCardsInPlay();

        console.log(`Player One draws 3 cards facedown and plays a ${playerOnePile[0].rank} of ${playerOnePile[0].suit}`);
        console.log(`Player Two draws 3 cards facedown and plays a ${playerTwoPile[0].rank} of ${playerTwoPile[0].suit}`);
        evaluateWar();
    }
}

//How to confirm at the end of war the standings and proceedings
let evaluateWar = () => {
    if (playerOnePile[0].score > playerTwoPile[0].score) {
        playerOneDeck.push(...playerOnePile, ...playerTwoPile);
        playerOnePile = [];
        playerTwoPile = [];
        
        console.log(`Player One WINS the WAR - card amount: ${playerOneDeck.length}`);
        console.log(`     Player Two - card amount: ${playerTwoDeck.length}`);
        determineWinner();
    } else if (playerOnePile[0].score < playerTwoPile[0].score) {
        playerTwoDeck.push(...playerTwoPile, ...playerOnePile);
        playerOnePile = [];
        playerTwoPile = [];

        console.log(`Player Two WINS the WAR - card amount ${playerTwoDeck.length}`);
        console.log(`     Player One - card amount ${playerOneDeck.length}`);
        determineWinner();
    } else {
     thisIsWar();
 }
}

//Decide who wins based on card amount of players
let determineWinner = () => {
    if (playerOneDeck.length === 52) {
        console.log("Player One VICTORIOUS");
    } else if (playerTwoDeck.length === 52) {
        console.log("Player Two PREVAILS");
    } else {
        playGame();
    }
}

playGame();



