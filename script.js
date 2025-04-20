humanScore = 0;
computerScore = 0;


function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber > 0 && randomNumber <= 0.33) {
        return "Rock";
    } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
console.log(getComputerChoice());

function getHumanChoice() {
    let userChoice = prompt("Choose one from Rock,Paper or Scissors: ");
    return userChoice;
}
console.log(getHumanChoice());

