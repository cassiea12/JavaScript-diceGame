/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

// .random outputs a random number between 0 and 6 which may have a decimal
//  . floor takes that random number and removes the decimal
// + 1 ensures there will never be a 0
dice = Math.floor(Math.random() * 6) + 1;

// querySelector('#current-0') finds the element with a specific id in the html page
// textContent = dice; changes the text inside the element to whatever text is after the =
// innerHTML = dice; changes the text inside the element to html code
document.querySelector('#current-' + activePlayer).textContent = dice;


// Change the css display property of the element with a class of .dice to none so the die does not show
var x = document.querySelector('#score-0').textContent = dice;
document.querySelector('.dice').style.display = 'none';
