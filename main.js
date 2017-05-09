var cards = [
  {
  	"rank": "queen",
  	"suit": "hearts",
  	"cardImage": "images/queen-of-hearts.png"
  },
    {
  	"rank": "queen",
  	"suit": "diamonds",
  	"cardImage": "images/queen-of-diamonds.png"
  },
    {
  	"rank": "king",
  	"suit": "hearts",
  	"cardImage": "images/king-of-hearts.png"
  },
    {
  	"rank": "king",
  	"suit": "diamonds",
  	"cardImage": "images/king-of-diamonds.png"
  },


];
var cardsInPlay = [];

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  	console.log("You found a match!");
  } else {
  	console.log("Sorry, try again.");
  }
}

var flipCard = function(){
  console.log("User flipped " + cards[0].rank + " " + cards[0].suit);
  console.log("User flipped " + cards[1].rank + " " + cards[1].suit);
  cardsInPlay.push[cards];
  if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
  } 
};

flipCard(0);
flipCard(2);
checkForMatch();