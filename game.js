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

    if (playerSelection === computerSelection) {
        console.log(`You Chose: ${playerSelection} | Computer Chose: ${computerSelection}`);
        return "It's A Tie!"
    }else if (playerSelection === "rock" && computerSelection === "scissor") {
        console.log(`You Chose: ${playerSelection} | Computer Chose: ${computerSelection}`);
        return "You Win! Rock Beats Scissor."
    }else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(`You Chose: ${playerSelection} | Computer Chose: ${computerSelection}`);
        return "You Lose! Paper Beats Rock."
    }else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(`You Chose: ${playerSelection} | Computer Chose: ${computerSelection}`);
        return "You Win! Paper Beats Rock."
    }else if (playerSelection === "paper" && computerSelection === "scissor") {
        console.log(`You Chose: ${playerSelection} | Computer Chose: ${computerSelection}`);
        return "You Lose! Scissor Beats Paper."
    }else if (playerSelection === "scissor" && computerSelection === "paper") {
        console.log(`You Chose: ${playerSelection} | Computer Chose: ${computerSelection}`);
        return "You Win! Scissor Beats Paper."
    }else if (playerSelection === "scissor" && computerSelection === "rock") {
        console.log(`You Chose: ${playerSelection} | Computer Chose: ${computerSelection}`);
        return "You Lose! Rock Beats Scissor."
    }else {
        return "Game Cancelled."
    }
}

function game() {
    // for (let i = 0; i < 5; i++) {
    //     console.log(playRound());
    // }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound))



