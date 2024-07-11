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
    if (humanScore >= 5 || computerScore >= 5) {
        commentary.textContent = "";
        score.textContent = ""
        if (computerScore > humanScore) {
            var winner = "COMPUTER WINS!";
        } else {var winner = "PLAYER WINS!"}
        alert(winner)
        computerScore = 0;
        humanScore = 0;}
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
const commentary = document.createElement("div")
const score = document.createElement("div")
const options = ["rock", "paper", "scissors"]


// create buttons
for (let i = 0; i < 3; i++) {
    const btn = document.createElement("button");
    btn.setAttribute("id", options[i])
    btn.textContent = options[i];
    btnContainer.appendChild(btn)
}

// organize buttons using body flex
btnContainer.style.display = "flex"
btnContainer.style.justifyContent = "center"
btnContainer.style.gap = "5px"
btnContainer.style.marginTop = "25px"
btnContainer.style.marginBottom = "25px"

// oragnize score and commentary 
scoreDisplay.style.display = "flex"
scoreDisplay.style.flexDirection = "column"
scoreDisplay.style.alignItems = "center"

// even listener for all buttons, plays round and updates score
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




