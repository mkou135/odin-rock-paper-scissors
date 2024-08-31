const rockChosen = document.getElementById("Rock");
const scissorsChosen = document.getElementById("Scissors");
const paperChosen = document.getElementById("Paper");
const resultDisplay = document.getElementById("Result");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const playerChoiceDisplay = document.getElementById("player");
const computerChoiceDisplay = document.getElementById("computer");
const currentRoundDisplay = document.getElementById("currentRound");

let currentRound = 0;

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  function playRound(playerSelection) {
    if (currentRound >= 5) {
      declareWinner(playerScore, computerScore);
      return;
    }

    currentRound++;
    updateRoundDisplay();
    const computerSelection = getComputerChoice();
    const result = determineWinner(playerSelection, computerSelection);

    playerChoiceDisplay.textContent = playerSelection;
    computerChoiceDisplay.textContent = computerSelection;

    if (result === "player") {
      playerScore++;
      resultDisplay.textContent = "You win this round!";
    } else if (result === "computer") {
      computerScore++;
      resultDisplay.textContent = "Computer wins this round!";
    } else {
      resultDisplay.textContent = "It's a draw!";
    }

    updateScores(playerScore, computerScore);

    if (currentRound === 5) {
      declareWinner(playerScore, computerScore);
    }
  }

  function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return "draw";
    if (
      (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Scissors" && computerChoice === "Paper") ||
      (playerChoice === "Paper" && computerChoice === "Rock")
    ) {
      return "player";
    }
    return "computer";
  }

  function updateScores(playerScore, computerScore) {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
  }

  function updateRoundDisplay() {
    currentRoundDisplay.textContent = currentRound;
  }

  function declareWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
      resultDisplay.textContent = "You win the game!";
    } else if (computerScore > playerScore) {
      resultDisplay.textContent = "Computer wins the game!";
    } else {
      resultDisplay.textContent = "The game is a tie!";
    }
    disableButtons();
  }

  function disableButtons() {
    rockChosen.disabled = true;
    paperChosen.disabled = true;
    scissorsChosen.disabled = true;
  }

  rockChosen.addEventListener("click", () => playRound("Rock"));
  paperChosen.addEventListener("click", () => playRound("Paper"));
  scissorsChosen.addEventListener("click", () => playRound("Scissors"));
}

playGame();