// script for rock paper scissors

// computer chooses rock, paper, or scissors
function getComputerChoice () {
    // randomly choose decimal 0-1
    var randomDecimal = Math.random()

    // equally assign decimal to choices 
    if (randomDecimal < 0.33) {
        return "rock";
    }
    else if (randomDecimal < 0.66) {
        return "paper";
    }
    else {
        return "scissors"
    }

}

console.log(getComputerChoice())