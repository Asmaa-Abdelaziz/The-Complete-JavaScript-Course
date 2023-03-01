'use strict';
/*
// Reading the element of the content
console.log(document.querySelector('.message').textContent);
// Setting the element of the content
document.querySelector('.message').textContent = 'correct number';
*/

/*
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
});
*/

// Implementing the game logic

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  if (score > 1) {
    // When there is no input
    if (!guess) {
      displayMessage('No Number!');
    }
    // When player wins
    else if (guess === secretNumber) {
      displayMessage('Correct Number!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      displayMessage(
        guess > secretNumber
          ? `${guess} is higher than the secret number!`
          : `${guess} is lower than the secret number!`
      );
      score--;
      document.querySelector('.score').textContent = score;
    }
    // When the guess number is higher than the secret number
    // else if (guess > secretNumber) {
    //   document.querySelector(
    //     '.message'
    //   ).textContent = `${guess} is higher than the secret number!`;
    //   score--;
    //   document.querySelector('.score').textContent = score;
    // }
    // When the guess number is lower than the secret number
    // else if (guess < secretNumber) {
    //   document.querySelector(
    //     '.message'
    //   ).textContent = `${guess} is lower than the secret number!`;
    //   score--;
    //   document.querySelector('.score').textContent = score;
    // }
  } else if (score === 1) {
    displayMessage(`LOOSER!!!`);
    document.querySelector('.score').textContent = 0;
  }
});

// Code challenge (implement a game reset functionality)
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
