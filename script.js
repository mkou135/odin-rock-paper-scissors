const rockChosen = document.getElementById("Rock");
const scissorsChosen = document.getElementById("Scissors");
const paperChosen = document.getElementById("Paper");
let score = 0;
document.getElementById("score").innerHTML = score;

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
  let computerChoice = ["Rock", "Paper", "Scissors"];
  computerChoice = computerChoice[Math.floor(Math.random() * 3)];
  return determineWinner(humanChoice, computerChoice);
}

function determineWinner(humanChoice, computerChoice) {
  console.log("computer picked " + computerChoice);
  console.log("you picked " + humanChoice);

  if (humanChoice === computerChoice) {
    return (document.getElementById("Result").innerHTML = "Draw!");
  }

  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Rock")
  ) {
    score = score + 1;
    return (document.getElementById("Result").innerHTML = "You win!");
  }

  return (document.getElementById("Result").innerHTML = "You lose!");
}

function determineWinner(humanChoice, computerChoice) {
  document.getElementById("computer").innerHTML = computerChoice
  document.getElementById("player").innerHTML = humanChoice


  if (humanChoice === computerChoice) {
    return (document.getElementById("Result").innerHTML = "Draw!");
  }

  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Rock")
  ) {
    score = score + 1;
    document.getElementById("score").innerHTML = score;
    return (document.getElementById("Result").innerHTML = "You win!");
  }
  score = score - 1;
  document.getElementById("score").innerHTML = score;
  return (document.getElementById("Result").innerHTML = "You lose!");
}
