
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

//Logic to play the entire game
function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    // Function to play one round
    function playRound(humanChoice, computerChoice) {

        humanChoice === humanChoice.toLowerCase();
        //If computer choice and human choice match, it's a tie!
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        }
        //Human win cases
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            console.log("You win! Rock beats Scissors");
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            console.log("You win! Paper beats Rock");
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            console.log("You win! Scissors beats Paper");
        }
        // Computer Win cases
        else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            console.log("You lose! Paper beats Rock");
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            console.log("You lose! Scissors beat Paper");
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            console.log("You lose! Rock beats Scissors");
        } else {
            console.log("Invalid choice.");
        }

    }

    for (let i = 0; i < 5; i++) {

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        console.log(humanScore);
        console.log(computerScore);

    }

    if (humanScore !== 3 || computerScore > humanScore) {
        console.log("You lost the game! Better luck next time");
    } else if (humanScore === 3 || computerScore < humanScore) {
        console.log("Congratulations! You won the game!");
    }
    else if (humanScore === computerScore) {
        console.log("It's a tie! Play again!");
    }
}

playGame();



