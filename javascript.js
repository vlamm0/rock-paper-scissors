// script for rock paper scissors

// computer chooses rock, paper, or scissors
function getComputerChoice () {
    // randomly choose decimal 0-1
    let randomDecimal = Math.random();

    // equally assign decimal to choices 
    if (randomDecimal < 0.33) {
        return "rock";
    }
    else if (randomDecimal < 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// player chooses rock, paper, or scissors
function getHumanChoice () {

    let playerChoice;
    // loops until valid choice
    while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        playerChoice = prompt("Choose rock, paper, or scissors:");
        playerChoice = playerChoice.toLowerCase().trim();
    } 
    
    return playerChoice;
}

// determines who wins and increases their respective score
function playRound (user, cpu) {
    if (user === cpu) {
        console.log("TIE!");
    }
    else if ((user == "rock" && cpu == "scissors") || (user == "paper" && cpu == "rock") || (user == "scissors" && cpu == "paper")) {
        console.log(`You win! ${user} beats ${cpu}`);
        humanScore++;
    }
    else {
        console.log(`You lose! ${cpu} beats ${user}`);
        computerScore++;
    }
}

// plays the game five times and prints the score at the end
function playGame () {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(`PLAYER : ${humanScore}\nCPU    : ${computerScore}`);
}

var humanScore = 0;
var computerScore = 0;

playGame();