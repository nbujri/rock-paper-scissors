let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const random = Math.floor((Math.random() * 3) + 1)
    switch (random) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissor";
            break;
        default:
            return "Error";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = this.value.toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    let message = "";

    if (playerScore < 5 && computerScore < 5) {
        if (playerSelection === computerSelection) {
            message += `You Chose: ${playerSelection} | Computer Chose: ${computerSelection}. \nIt's A Tie!`;
        }else if (playerSelection === "rock" && computerSelection === "scissor") {
            message += `You Chose: ${playerSelection} | Computer Chose: ${computerSelection}. \nYou Win! Rock Beats Scissor.`;
            playerScore += 1;
        }else if (playerSelection === "rock" && computerSelection === "paper") {
            message += `You Chose: ${playerSelection} | Computer Chose: ${computerSelection}. \nYou Lose! Paper Beats Rock.`;
            computerScore += 1;
        }else if (playerSelection === "paper" && computerSelection === "rock") {
            message += `You Chose: ${playerSelection} | Computer Chose: ${computerSelection}. \nYou Win! Paper Beats Rock.`;
            playerScore += 1;
        }else if (playerSelection === "paper" && computerSelection === "scissor") {
            message += `You Chose: ${playerSelection} | Computer Chose: ${computerSelection}. \nYou Lose! Scissor Beats Paper.`;
            computerScore += 1;
        }else if (playerSelection === "scissor" && computerSelection === "paper") {
            message += `You Chose: ${playerSelection} | Computer Chose: ${computerSelection}. \nYou Win! Scissor Beats Paper.`;
            playerScore += 1;
        }else if (playerSelection === "scissor" && computerSelection === "rock") {
            message += `You Chose: ${playerSelection} | Computer Chose: ${computerSelection}. \nYou Lose! Rock Beats Scissor.`;
            computerScore += 1;
        }else {
            message += "Game Cancelled."
        }
    } else {
        if (playerScore === 5) {
            message = `YOU HAVE 5 POINTS. YOU WIN!`
        } else if (computerScore === 5) {
            message = `COMPUTER HAS 5 POINTS. YOU LOSE!`
        }
    }

    

    playerScoreDisplay.textContent = `PLAYER SCORE: ${playerScore}`;
    computerScoreDisplay.textContent = `COMPUTER SCORE: ${computerScore}`;
    displayResult.textContent = message;
}

const buttons = document.querySelectorAll('button');
const displayResult = document.querySelector('.display-result')
const playerScoreDisplay = document.querySelector('.player-score')
const computerScoreDisplay = document.querySelector('.computer-score')
buttons.forEach(button => button.addEventListener('click', playRound))




