'use strict';

console.log(document.querySelector('.message').textContent);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const userGuess = Number(document.querySelector('.guess').value);

  console.log(userGuess, typeof userGuess);

  if (!userGuess) {
    // document.querySelector('.message').textContent = 'NO NUMBER ⛔';
    displayMessage('NO NUMBER ⛔');
  } else if (userGuess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent = 'Correct number❁🏆';
    displayMessage('Correct number❁🏆');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (userGuess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = userGuess > secretNumber ? 'TOO HIGH' : 'TOO LOW';
      displayMessage(userGuess > secretNumber ? 'TOO HIGH' : 'TOO LOW');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'you lose...🥹';
      displayMessage('you lose...🥹');
      document.querySelector('.score').textContent = 0;
    }
  }

  //  else if (userGuess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'TOO HIGHT';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lose...🥹';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (userGuess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'TOO LOW';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lose...🥹';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = undefined;
  // .value = '';

  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
