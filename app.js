const startGameBtn = document.getElementById("start-game-btn");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const player_choice = document.getElementById("player_choice");
const result = document.getElementById("result");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";
const DEFAULT_PLAYER_CHOICE=ROCK

let gameIsRunning = false;

let playerChoice=DEFAULT_PLAYER_CHOICE;

rockBtn.addEventListener("click", () => {
  playerChoice = ROCK;
  player_choice.innerText = playerChoice;
});
paperBtn.addEventListener("click", () => {
  playerChoice = PAPER;
  player_choice.innerText = playerChoice;
});
scissorBtn.addEventListener("click", () => {
  playerChoice = SCISSORS;
  player_choice.innerText = playerChoice;
});

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const player_Choice = playerChoice;
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, player_Choice);
  let message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + "had a DRAW.";
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + "WON.";
  } else {
    message = message + "LOST.";
  }
  result.innerText = message;
  gameIsRunning = false;
});
