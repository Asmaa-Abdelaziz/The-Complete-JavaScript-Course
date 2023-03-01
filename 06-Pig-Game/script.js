'use strict';

// It is the same as getting element by ID but getting element by ID is supposed to be a little bit faster than queryselector
// const score0= document.getElementById('score--0');

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

// Initial conditions
let scores,
  currentScore,
  activePlayer,
  gamePlaying = 0;

const init = function () {
  // Assigning the value again (will solve this problem in second section with scoping)
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  //   gamePlaying = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.remove('hidden');
  btnRoll.classList.remove('hidden');
  btnHold.classList.remove('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

// Declaring the switching function
const switchPlayer = function () {
  // Switch to next player
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // change background color
  player0El.classList.toggle('player--active'); // toggel method check if the class is there remove it and if it's not there add it.
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //   if (gamePlaying) {
  // 1. Generating random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // console.log(dice);

  // 2. display the dice
  // Remove hidden class from dice element then display the number on the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. check for rolled if 1 -> switch to next player and make current = 0
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
  //   }
});

btnHold.addEventListener('click', function () {
  //   if (gamePlaying) {
  // 1. Add current score to active player's score
  scores[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];
  // 2. Check if player's score is >= 100
  if (scores[activePlayer] >= 100) {
    // if Yes -> Finish the game
    //   gamePlaying = false;
    diceEl.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    document.querySelector(`#current--${activePlayer}`).textContent = 0;

    btnRoll.classList.add('hidden');
    btnHold.classList.add('hidden');
    document.querySelector(`#name--${activePlayer}`).textContent = `PLAYER ${
      activePlayer + 1
    } wins`;
  } else {
    // if No -> Switch to the next player
    switchPlayer();
  }
  //   }
});

btnNew.addEventListener('click', init);

// NOTES
// If one of players wins, I hide the ROLL DICE & the HOLD buttons so i comment the condition if game is playing or not.
