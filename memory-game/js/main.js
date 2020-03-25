cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1])
  	{
		alert("You found a match!");
  	}
  	else 
  	{
  		alert("Sorry. Try Again");
  	}
  }
function flipCard(cardID) {
	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);

	if (cardsInPlay.length === 2) {
 	checkForMatch(); 	
	}
}

flipCard(0);
flipCard(2);