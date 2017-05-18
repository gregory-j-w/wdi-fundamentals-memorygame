var cards = [
  {
  	rank: "queen",
  	suit: "hearts",
  	cardImage: "images/queen-of-hearts.png"
  },
  {  
  	rank: "queen",
  	suit: "diamonds",
  	cardImage: "images/queen-of-diamonds.png"
  },
  {  
  	rank: "king",
  	suit: "hearts",
  	cardImage: "images/king-of-hearts.png"
  },
    {  
  	rank: "king",
  	suit: "diamonds",
  	cardImage: "images/king-of-diamonds.png"
  },
];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }
};

var flipCard = function () {
/*On the first line inside the flipCard function, use the 
getAttribute method to get the data-id attribute of the 
card that was just clicked and store it in a variable cardId.
Hint: We can use the this keyword to access the card that 
was clicked: this.getAttribute('attribute-we-want-to-get-
goes-here');*/
//this should referenece the current that is clicked

console.log(this.getAttribute('data-id'), ' this is carddid')
   var cardId = cardsInPlay.push(cards[cardId].rank);
   console.log("User flipped " + cards[cardId]);
   console.log("User flipped " + cards[cardId].suit);
   console.log("User flipped " + cards[cardId].cardImage);
   this.setAttribute("src", cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again!");
	}
}
};

var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
 	cardElement.setAttribute("data-id", i);
 	// Attach an eventlistener to the card element, not the document,
 	cardElement.addEventListener("click", flipCard);
 	document.querySelector("#game-board").appendChild(cardElement); 
  }
};

createBoard();
checkForMatch();