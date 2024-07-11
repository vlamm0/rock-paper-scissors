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
        //console.log("TIE!");
        commentary.textContent = "TIE!"
    }
    else if ((user == "rock" && cpu == "scissors") || (user == "paper" && cpu == "rock") || (user == "scissors" && cpu == "paper")) {
        //console.log(`You win! ${user} beats ${cpu}`);
        commentary.textContent = `You win! ${user} beats ${cpu}`
        getScore("+");
    }
    else {
        //console.log(`You lose! ${cpu} beats ${user}`);
        commentary.textContent = `You lose! ${cpu} beats ${user}`
        getScore("-");
    }
}

function getScore (change="") {
    if (change == "+") {
        humanScore++;
    } 
    else if (change == "-") {
        computerScore++;
    } else {
        computerScore = 0;
        humanScore = 0;
    }
    //score.textContent = `PLAYER : ${humanScore}\nCPU    : ${computerScore}`
}

// plays the game five times and prints the score at the end
function playGame () {
    // for (let i = 0; i < 5; i++) {
    //     playRound(getHumanChoice(), getComputerChoice());
    // }
    playRound(getHumanChoice(), getComputerChoice());

    console.log(`PLAYER : ${humanScore}\nCPU    : ${computerScore}`);
}


// initialize score
var computerScore;
var humanScore
getScore()

// setup body/options
const body = document.querySelector("body");
const btnContainer = document.createElement("div")
btnContainer.setAttribute("class", "button_container")
const scoreDisplay = document.createElement("div")
//scoreDisplay.textContent = "score"
const commentary = document.createElement("div")
const score = document.createElement("div")

//const btnContainer = document.querySelector(".button_container")
const options = ["rock", "paper", "scissors"]


// create buttons
for (let i = 0; i < 3; i++) {
    const btn = document.createElement("button");
    btn.setAttribute("id", options[i])
    btn.textContent = options[i];
    btnContainer.appendChild(btn)
}

// organize buttons using body flex
btnContainer.style.border = "2px solid black"
btnContainer.style.display = "flex"
btnContainer.style.justifyContent = "center"
btnContainer.style.gap = "5px"

score.style.border = "2px solid black"
//score.textContent = `PLAYER : ${humanScore}\nCPU    : ${computerScore}`
commentary.style.border = "2px solid black"
commentary.textContent = "score"

// even listener for all properties of body
btnContainer.addEventListener("click", (e) => {
    let target = e.target;

    switch(target.id) {
        case 'rock':
            playRound('rock', getComputerChoice())
            break;
        case 'paper':
            playRound("paper", getComputerChoice())
            break;
        case 'scissors':
            playRound("scissors", getComputerChoice())
            break;
        
    } score.textContent = `PLAYER : ${humanScore}\nCPU    : ${computerScore}`
})
scoreDisplay.appendChild(commentary)
scoreDisplay.appendChild(score)
body.appendChild(btnContainer)
body.appendChild(scoreDisplay)
// initialize game
// while (true) {
//     playGame();
// }



