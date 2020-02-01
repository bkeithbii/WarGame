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
    draw() {
       return warDeck.cards[Math.floor(Math.random()*warDeck.cards.length)];
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

}

// class firstPlayer {
//     constructor() {
//         this.length = length
//         this.cards = []
//     }
// }
// class secondPlayer {
//     constructor() {
//         this.length = length 
//         this.cards = []
//     }
// }


const warDeck = new Deck()
warDeck.makeCards();
//  console.log(warDeck.cards);
//Deck of Cards has been made

//Next - SHUFFLE the deck 
warDeck.shuffle();
// console.log(warDeck.cards);
//This is a shuffled deck


//Random card draw
//  console.log(warDeck.draw());
//  console.log(warDeck.draw());


// let halfDeck = Math.ceil(warDeck.cards.length / 2);

// let firstPlayerDeck = warDeck.cards.splice(0, halfDeck);



//Try to deal equal hands to each player 
const firstPlayerDeck = new firstPlayer()
console.log(firstPlayerDeck.cards);

const secondPlayerDeck = new secondPlayer()
console.log(secondPlayerDeck.cards);