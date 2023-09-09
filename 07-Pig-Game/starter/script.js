'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const currentScore0EL = document.getElementById('current--0');
const currentScore1EL = document.getElementById('current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let currentScore, activePlayer, playing, score;

const init = function () {
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score = [0, 0];

  // New game condition
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0EL.textContent = 0;
  currentScore1EL.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  // number is 1 : if true switch player;
  currentScore = 0;
  // currentScore0EL.textContent = currentScore;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;

  //   if (activePlayer === 1) {
  //     player0El.classList.remove('player--active');
  //     player1El.classList.add('player--active');
  //   } else {
  //     player0El.classList.add('player--active');
  //     player1El.classList.remove('player--active');
  //   }
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRollDice.addEventListener('click', function () {
  if (playing) {
    //.Generate random dice number
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //display dice. according to the random number
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      // save current score
      currentScore += dice;
      // currentScore0EL.textContent = currentScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //   if (activePlayer === 0) {
    //     score0El.textContent = score[0] += currentScore;
    //   } else {
    //     score1El.textContent = score[1] += currentScore;
    //   }
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    console.log(score);

    if (score[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      console.log(`Player ${activePlayer + 1} win the game!🎉`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener('click', init);
