// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';
import { doesUserWin } from './get-random-throw.js';

const playButton = document.getElementById('play');
const totalWins = document.getElementById('total-wins');
const totalLosses = document.getElementById('total-losses');
const totalDraws = document.getElementById('total-draws');
const resetBtn = document.getElementById('reset-id');
let resetSpan = document.getElementById('resetSpan');

// initialize state
let wins = 0;
let losses = 0;
let draws = 0;
let resets = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

playButton.addEventListener('click', () => {

    const selected = document.querySelector('input[type=radio]:checked');
    const userChoice = selected.value;
    
    let randomNum = Math.ceil(Math.random() * 3);
    let computerChoice = getRandomThrow(randomNum);

    const theWinner = doesUserWin(userChoice, computerChoice);

    if (theWinner === 'win') {
        wins++;
        totalWins.textContent = wins;
    }
    else if (theWinner === 'draw') {
        draws++;
        totalDraws.textContent = draws;
    }
    else {
        losses++;
        totalLosses.textContent = losses;
    } 
});

resetBtn.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    draws = 0;
    resets++;
    totalWins.textContent = wins;
    resetSpan.textContent = resets;
    totalLosses.textContent = losses;
    totalDraws.textContent = draws;
});

