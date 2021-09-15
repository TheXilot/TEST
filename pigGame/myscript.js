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
const btnReset = document.querySelector('.btn-reset');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
const subContainerPlayer0 = document.querySelector('.subcontainer.player0');
const subContainerPlayer1 = document.querySelector('.subcontainer.player1');
const img = document.querySelector('.imgdice');
const setValue = function (playerId, element, value) {
  const sc = document.querySelector(`.${element}.player${playerId}`);
  sc.textContent = value;
};
const getValue = function (playerId, element) {
  const sc = document.querySelector(`.${element}.player${playerId}`);
  return Number(sc.textContent);
};
function play(song) {
  //stop all sound played
  // let audios = document.querySelectorAll(`audio`);
  // audios.forEach(e => {
  //   e.currentTime = 0;
  //   e.pause();
  // });
  let audio = document.getElementById(`${song}`);
  audio.currentTime = 0;
  audio.play();
}
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
  img.src = `https://www.calculator.net/img/dice${diceNumber}.png`;
};
const generate = () => {
  diceNumber = Math.trunc(Math.random() * 6 + 1);
  return diceNumber;
};
const generateRobot = () => {
  return Math.trunc(Math.random() * 6 + 1);
};
const reset = function () {
  players.forEach(element => {
    element.currentScore = 0;
    element.score = 0;
  });
  activePlayer = 0;
  const label0 = document.querySelector(`.player-label.player0`);
  const label1 = document.querySelector(`.player-label.player1`);
  label0.textContent = 'PLAYER 1';
  label1.textContent = 'PLAYER 2';
  subContainerPlayer1.classList.remove('win');
  subContainerPlayer0.classList.remove('win');
  render();
  console.log('reset-btn');
};
const switchPlayer = () => {
  console.log('in switch function active player before change :', activePlayer);
  activePlayer = activePlayer === 0 ? 1 : 0;
  play('switch');
  img.classList.toggle('hidden', 0);
  subContainerPlayer0.classList.toggle('active');
  subContainerPlayer1.classList.toggle('active');
  btnHold.classList.toggle('disabled');
  btnRoll.classList.toggle('disabled');
  btnReset.classList.toggle('disabled');
  if (activePlayer === 1) robot();
};
const roll = function () {
  console.log('in roll function active player', activePlayer);
  gameStart = 1;
  generate();
  img.classList.toggle('hidden', 0);
  if (diceNumber === 1) {
    //reset the score for the currrent player
    players[activePlayer].score = 0;
    players[activePlayer].currentScore = 0;
    //change active player
    hold();
    return -1;
  }
  players[activePlayer].currentScore += diceNumber;
  if (players[activePlayer].currentScore >= 100) {
    win(activePlayer);
    return -1;
  }
  play('dice');
  render();
};
const hold = function () {
  if (!gameStart) return;
  players[activePlayer].score = players[activePlayer].currentScore;
  switchPlayer();
  render();
};
const win = function (id) {
  const label = document.querySelector(`.player-label.player${id}`);
  label.textContent = `Player ${id} is the Winner !!`;
  if (id) {
    subContainerPlayer1.classList.toggle('win', 1);
  } else {
    subContainerPlayer0.classList.toggle('win', 1);
  }
};
function sleep(t) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, t);
  });
}
//robot Action
const robot = async function () {
  await sleep(1000);
  console.log('in Robot function');
  while (generateRobot() <= 4) {
    console.log('in while loop');
    let numberOne = roll();
    await sleep(2000);
    if (numberOne < 0) return;
  }
  hold();
};
//button Reset

btnReset.addEventListener('click', reset);
//button roll
btnRoll.addEventListener('click', roll);
//button hold
btnHold.addEventListener('click', hold);
//Event
//      Reset

// render();
