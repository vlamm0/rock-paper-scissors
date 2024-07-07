// script for rock paper scissors

// computer chooses rock, paper, or scissors
function getComputerChoice () {
    // randomly choose decimal 0-1
    var randomDecimal = Math.random();

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

    var playerChoice;
    // loops until valid choice
    while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        playerChoice = prompt("Choose rock, paper, or scissors:");
        playerChoice = playerChoice.toLowerCase().trim();
    } 
    
    return playerChoice;
}
