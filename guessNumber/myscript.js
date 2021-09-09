let number = Math.trunc(Math.random() * 20) + 1;
let hightscore = 0;
let score = 20;
let win = false;
console.log(number);
//Game Logic
const getNumber = function () {
  const guess = Number(document.querySelector('.guess').value);
  if (win === true) return;
  if (score === 0) {
    document.querySelector('.message').textContent = '😚 You lost the Game !';
    return;
  }
  if (!guess) {
    document.querySelector('.message').textContent = '🌠 Put a Number plz !';
    return;
  }
  if (guess < 0) {
    document.querySelector('.message').textContent =
      '🌠 Put a Number greater than 0 !';
    return;
  }
  if (guess === number) {
    document.querySelector('.message').textContent = `💰💰 You win the Game`;
    hightscore = score > hightscore ? score : hightscore;
    document.querySelector('.score').textContent = score;
    document.querySelector('.hightscore').textContent = hightscore;
    document.querySelector('.number').textContent = number;
    win = true;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '32rem';
    return;
  }
  if (number > guess) {
    document.querySelector(
      '.message'
    ).textContent = `🌠 is greater than ${guess}`;
    score--;
  } else {
    document.querySelector(
      '.message'
    ).textContent = `🌠 is lower than ${guess}`;
    score--;
  }
  document.querySelector('.score').textContent = score;
};
//Reset the Game
const reset = function () {
  document.querySelector('.number').textContent = '?';
  win = false;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = `Start guessing...`;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').style.width = '15rem';
};

//add Event
document.querySelector('.btn-check').addEventListener('click', getNumber);
document.querySelector('.btn-again').addEventListener('click', reset);
