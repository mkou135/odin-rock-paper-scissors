const rockChosen = document.getElementById("Rock");
const scissorsChosen = document.getElementById("Scissors");
const paperChosen = document.getElementById("Paper");
let playerScore = 0;
let computerScore = 0;
updateScores();

rockChosen.addEventListener("click", function () {
  let humanChoice = "Rock";
  getComputerChoice(humanChoice);
});
scissorsChosen.addEventListener("click", function () {
  let humanChoice = "Scissors";
  getComputerChoice(humanChoice);
});
paperChosen.addEventListener("click", function () {
  let humanChoice = "Paper";
  getComputerChoice(humanChoice);
});

function getComputerChoice(humanChoice) {
  let computerChoices = ["Rock", "Paper", "Scissors"];
  let computerChoice = computerChoices[Math.floor(Math.random() * 3)];
  determineWinner(humanChoice, computerChoice);
}

function determineWinner(humanChoice, computerChoice) {
  document.getElementById("computer").innerHTML = computerChoice;
  document.getElementById("player").innerHTML = humanChoice;

  if (humanChoice === computerChoice) {
    document.getElementById("Result").innerHTML = "Draw!";
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Rock")
  ) {
    playerScore++;
    document.getElementById("Result").innerHTML = "You win!";
  } else {
    computerScore++;
    document.getElementById("Result").innerHTML = "You lose!";
  }
  
  updateScores();
}

function updateScores() {
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore;
}