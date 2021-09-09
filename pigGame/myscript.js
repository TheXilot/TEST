'use strict';
let activePlayer = 0; //0 player1 1: player2
let player1 = {
  score: 0,
  currentScore: 0,
};
let player2 = {
  score: 0,
  currentScore: 0,
};
let diceNumber = 0;
let players = [player1, player2];
let gameStart = 0;
const setValue = function (playerId, element, value) {
  const sc = document.querySelector(`.${element}.player${playerId}`);
  sc.textContent = value;
};
const getValue = function (playerId, element) {
  const sc = document.querySelector(`.${element}.player${playerId}`);
  return Number(sc.textContent);
};
// element : score // current-score
// console.log(getValue(1, 'score'));
function render() {
  players.forEach((element, index) => {
    setValue(index, 'score', element.score);
    setValue(index, 'current-score', element.currentScore);
  });
  //render img Dice
  setImg(diceNumber);
  //render ActicePlayerStyle
}
const setImg = () => {
  const img = document.querySelector('.imgdice');
  img.src = `https://www.calculator.net/img/dice${diceNumber}.png`;
};
const generate = () => {
  diceNumber = Math.trunc(Math.random() * 6 + 1);
  return diceNumber;
};
const reset = function () {
  players.forEach(element => {
    element.currentScore = 0;
    element.score = 0;
  });
  activePlayer = 0;
  render();
  console.log('reset-btn');
};
const switchPlayer = () => {
  activePlayer = activePlayer === 0 ? 1 : 0;
};
const roll = function () {
  gameStart = 1;
  generate();
  if (diceNumber === 1) {
    //reset the score for the currrent player
    players[activePlayer].score = 0;
    players[activePlayer].currentScore = 0;
    //change active player
    switchPlayer();
    render();
    return;
  }
  players[activePlayer].currentScore += diceNumber;
  render();
};
const hold = function () {
  if (!gameStart) return;
  players[activePlayer].score = players[activePlayer].currentScore;
  switchPlayer();
  render();
};
//button Reset
const btnReset = document.querySelector('.btn-reset');
btnReset.addEventListener('click', reset);
//button roll
const btnRoll = document.querySelector('.btn-roll');
btnRoll.addEventListener('click', roll);
//button hold
const btnHold = document.querySelector('.btn-hold');
btnHold.addEventListener('click', hold);
//Event
//      Reset

// render();
