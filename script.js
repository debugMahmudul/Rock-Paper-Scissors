let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber > 0 && randomNumber <= 0.33) {
        return "rock";
    } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userChoice = prompt("Choose one from Rock,Paper or Scissors: ");
    return userChoice;
}

// Play one round
function playRound(humanChoice, computerChoice) {
    // your code here!
    humanChoice === humanChoice.toLowerCase();
    //If computer choice and human choice match, it's a tie!
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
    //Human win cases
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win! Rock beats Scissors";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats Rock";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win! Scissors beats Paper";
    }
    // Computer Win cases
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You lose! Paper beats Rock";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "You lose! Scissors beat Paper";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You lose! Rock beats Scissors";
    } else {
        return "Invalid choice.";
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));



