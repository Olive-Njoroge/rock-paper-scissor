const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const resultrDisplay = document.querySelector("#resultDisplay");

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!"
    }
    else{
        switch(playerChoice){
            case "rock":
               result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!"
               break;

            case "paper":
               result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!"
               break;

            case "scissors":
               result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!"
               break;
        }
    }

    playerDisplay.innerHTML = `PLAYER: ${playerChoice}`;
    computerDisplay.innerHTML = `COMPUTER: ${computerChoice}`;
    resultDisplay.innerHTML = result;

}