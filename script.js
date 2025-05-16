
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

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

// Function to play one round
function playRound(humanChoice, computerChoice) {

    if (gameOver) {
        return;
    }

    humanChoice = humanChoice.toLowerCase();

    //If computer choice and human choice match, it's a tie!
    if (humanChoice === computerChoice) {
        resultsDiv.textContent = `It's a tie!\n
        & The score is Human: ${humanScore} | Computer: ${computerScore}`;
    }

    //Human win cases
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        resultsDiv.textContent = `You win! Rock beats Scissors\n
        & The score is Human: ${humanScore} | Computer: ${computerScore}`;

    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        resultsDiv.textContent = `You win! Paper beats Rock\n
        & The score is Human: ${humanScore} | Computer: ${computerScore}`;

    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        resultsDiv.textContent = `You win! Scissors beats Paper\n
        & The score is Human: ${humanScore} | Computer: ${computerScore}`;
    }
    // Computer Win cases
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        resultsDiv.textContent = `You lose! Paper beats Rock\n
        & The score is Human: ${humanScore} | Computer: ${computerScore}`;

    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        resultsDiv.textContent = `You lose! Scissors beat Paper\n
        & The score is Human: ${humanScore} | Computer: ${computerScore}`;

    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        resultsDiv.textContent = `You lose! Rock beats Scissors\n
        & The score is Human: ${humanScore} | Computer: ${computerScore}`;
    } else {
        resultsDiv.textContent = "Invalid choice.";
    }

    if (humanScore === 5) {
        resultsDiv.textContent = `The score is Human: ${humanScore} | Computer: ${computerScore}`;
        announcementDiv.textContent = "Congratulations! You won the game!";
        gameOver = true;
        return;

    } else if (computerScore === 5) {
        resultsDiv.textContent = `The score is Human: ${humanScore} | Computer: ${computerScore}`;
        announcementDiv.textContent = "You lost the game! Better luck next time!";
        gameOver = true;
        return;
    }

}

const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissor = document.createElement("button");

document.body.appendChild(btnRock);
document.body.appendChild(btnPaper);
document.body.appendChild(btnScissor);

btnRock.textContent = "rock";
btnPaper.textContent = "paper";
btnScissor.textContent = "scissors";

btnRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});


btnPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});


btnScissor.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

const resultsDiv = document.createElement("div");
document.body.appendChild(resultsDiv);

const announcementDiv = document.createElement("div");
document.body.appendChild(announcementDiv);









