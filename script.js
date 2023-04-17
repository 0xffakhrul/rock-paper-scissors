function playGame(playerChoice) {
  playerChoice = playerChoice.toLowerCase();

  const selections = ["rock", "paper", "scissors"];

  // if (!selections.includes(playerChoice)) {
  //   console.log(!selections.includes(playerChoice));
  //   document.getElementById("game-result").textContent =
  //     "Invalid selection. Please choose rock, paper, or scissors.";
  //   return;
  // }
  const computerChoice =
    selections[Math.floor(Math.random() * selections.length)];

  console.log(computerChoice);

  let result;
  if (playerChoice === computerChoice) {
    result = "TIE!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    result = "YOU WIN! " + playerChoice + " beats " + computerChoice;
  } else {
    result = "YOU lose! " + computerChoice + " beats " + playerChoice;
  }

  document.querySelector("#game-result").textContent = result;
}
