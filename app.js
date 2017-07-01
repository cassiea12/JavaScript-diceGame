/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, gamePlaying, lastRoll, winningScore;

init();

// When the roll dice button is clicked...
document.querySelector('.btn-roll').addEventListener('click', function() {

	if(gamePlaying) {

		// 1. random number
		var dice = Math.floor(Math.random() * 6) + 1;

		// 2. Display Result
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';

		// if 2 sixes were rolled in a row...
		if (dice === 6 && lastRoll === 6){
			// if dice = 6 and last dice = 6

			//player loses entire score
			scores[activePlayer] = 0;

			// update the UI
			document.querySelector('#score-' + activePlayer).textContent = '0';

			//reset lastRoll variable
			lastRoll= -1;

			//next players turn
			nextPlayer();
		}
		//  Update the round score IF the rolled number was NOT a 1 or 2 sixes in a row
		else if(dice !== 1) {
			//add score
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;

			if (dice === 6) {
				lastRoll = 6;

			} else {
				lastRoll= -1;
			}


		} else {
			//next player
			nextPlayer();
		}

	}


});


//hold button

document.querySelector('.btn-hold').addEventListener('click', function() {

	if(gamePlaying) {
		// add current score to global score
	scores[activePlayer] += roundScore;

	// update the UI
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

	// check if player won the game
var newScore = document.getElementById("newScore").value;

	if (newScore) {
		winningScore = newScore;
	} else {
		winningScore = 100;
	}
		if (scores[activePlayer] >= winningScore) {
			document.querySelector('#name-' + activePlayer).textContent = "Winner!";
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

			gamePlaying = false;
		} else {
			// next player
			nextPlayer();
		}
	}

});

// new game button

document.querySelector('.btn-new').addEventListener('click', init);


function init () {
	scores = [0,0]
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;

	document.querySelector('.dice').style.display = 'none';

	document.getElementById('score-0').textContent= '0';
	document.getElementById('score-1').textContent= '0';

	document.getElementById('current-0').textContent= '0';
	document.getElementById('current-1').textContent= '0';

	document.getElementById('name-0').textContent = "Player 1";
	document.getElementById('name-1').textContent = "Player 2";

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');

	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');

	document.querySelector('.player-0-panel').classList.add('active');

}

// next player's turn

function nextPlayer () {
	activePlayer=== 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;

		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display = 'none';

		lastRoll = -1;

}

























