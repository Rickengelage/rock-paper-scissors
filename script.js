function getComputerChoice(){  
    let randomNum = Math.floor(Math.random() * 3); 
    if (randomNum == 0) {
        return "rock";
    } else if (randomNum == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
//the rock choice button
const rockBtn = document.querySelector(".btn-1")
rockBtn.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
    
});

// here used to be the playgame function

let humanScoreBoard = 0;
let computerScoreBoard = 0;
let roundCounter = 1;


//round display section where the round is updated which each click
const displayContainer = document.querySelector(".roundDisplay");
    const currentRound = document.createElement("h1");
    //adding the h1 to dom
    currentRound.classList.add("currentRound");
    //appending h1 as child of btn contianer div//
   displayContainer.appendChild(currentRound);
    //chaning the text of the h1
    currentRound.textContent = "start the first round by choosing rock, paper or scissors!";

//scoreboard section where the scoreboard of the computer is displayed and updated.
const score = document.querySelector(".scoreboard");
const computerPoints = document.createElement("h2");
computerPoints.classList.add("computerPoints");
score.appendChild(computerPoints);
//displaying the current computer score at the start
computerPoints.textContent = "computer Score is:" + " " + computerScoreBoard;

//scoreboard section where the scoreboard of human is displayed and updated.
const scoreHuman = document.querySelector(".scoreboard");
const humanPoints = document.createElement("h2");
humanPoints.classList.add("humanPoints");
scoreHuman.appendChild(humanPoints);
//displaying the current computer score at the start
humanPoints.textContent = "Your Score is:" + " " + humanScoreBoard;

const currentChoice = document.querySelector(".choiceContainer");
const choiceDisplay = document.createElement("h3");
choiceDisplay.classList.add("choiceDisplay");
currentChoice.appendChild(choiceDisplay);
choiceDisplay.textContent = ""

const machineChoice = document.querySelector(".choiceContainer");
const machineDisplay = document.createElement("h3");
machineDisplay.classList.add("machineDisplay");
machineChoice.appendChild(machineDisplay);
machineDisplay.textContent = ""



function playRound(humanScore, computerScore) {
if (humanScore == "Rock" ) {
    
    //updating what round we are on
    currentRound.textContent = "round" + " " + roundCounter++;
    // text showing what your choice was//
    choiceDisplay.textContent = "you choose Rock !"
    // const container = document.querySelector(".btn-container");
    // const choice = document.createElement("h3");
    // choice.classList.add("choice");
    // container.appendChild(choice);
    // choice.textContent = " " + "you choose rock !";
   
} else if(humanScore == "paper") {
    roundCounter++
    console.log("ROUND" + " " + roundCounter + "...");
    console.log("you choose paper");
} else if(humanScore == "scissors"){
    roundCounter++
    console.log("ROUND" + " " + roundCounter + "...");
    console.log("you choose scissors");
}else {
    console.log("invalid input");
}

if(humanScore == "Rock" && computerScore == "paper") {
    //updated the computer scorebaord when he wins
    computerScoreBoard++
    //updated the computer scoreboard text after he won a round, adding 1 to his score
    computerPoints.textContent = "computer Score is:" + " " + computerScoreBoard;
    machineDisplay.textContent = "the computer chooses paper, therefor the computer wins this round."
    
    // //targeting the div with buttons container
    // const container = document.querySelector(".btn-container");
    // //creating an h3 that will display the computer choice
    // const computerChoice = document.createElement("h3")
    // computerChoice.classList.add("computerChoice")
    // container.appendChild(computerChoice);
    // computerChoice.textContent = "the computer chooses paper, therefor the computer wins this round";
    
    
}else if(humanScore == "Rock" && computerScore == "scissors"){
    //update the scoreboard by 1 when human wins one round
    humanScoreBoard++;
    //updating the human scoreboard text
    humanPoints.textContent = "Your Score is:" + " " + humanScoreBoard;
   //displaying the computer choice as an h3
    machineDisplay.textContent = "the computer chooses scissors! YOU WIN!"

    // const container = document.querySelector(".btn-container");
    // const computerChoice = document.createElement("h3")
    // computerChoice.classList.add("computerChoice")
    // container.appendChild(computerChoice);
    // computerChoice.textContent = "the computer chooses scissors! YOU WIN!";

    //HERE: please update the code below to also display what the computer choose,
    //and then update the scoreboard acordingly!
}else if(humanScore == "Rock" && computerScore == "rock"){
    machineDisplay.textContent = "the computer chooses rock too, its a tie!"
    // const container = document.querySelector(".btn-container");
    // const computerChoice = document.createElement("h3")
    // computerChoice.classList.add("computerChoice")
    // container.appendChild(computerChoice);
    // computerChoice.textContent = "the computer chooses rock too, its a tie";

    // 
}else if(humanScore == "paper" && computerScore == "rock") {
    console.log("The computer chooses rock, YOU WIN!");
    humanScoreBoard++;
}else if(humanScore == "paper" && computerScore == "paper") {
    console.log("The computer chooses paper too, its a tie!");
}else if(humanScore == "paper" && computerScore == "scissors"){
    console.log("The computer chooses scissors, therefor the computer wins!")
    computerScoreBoard++;
}else if(humanScore == "scissors" && computerScore == "rock") {
    console.log("the computer chooses rock, therefore the computer wins!")
    computerScoreBoard++;
}else if(humanScore == "scissors" && computerScore == "paper") {
    console.log("the computer chooses paper, YOU WIN!")
    humanScoreBoard++;
}else if(humanScore == "scissors" && computerScore == "scissors"){
    console.log("the computer also choosese scissors, That would be a tie!");
}else {
    console.log("invalid input")
}
}
// for (let i=0; i < 5; i++) {
//     let humanSelection = getHumanChoice();
//     let computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
// }
// if (humanScoreBoard > computerScoreBoard) {
//  console.log("YAY! you won from the computer! well done.");
// }else if(humanScoreBoard < computerScoreBoard){
//     console.log("...OOFFF... you let the computer win! better luck next time.");
// }else {
//     console.log("The end result..... its a tie")
// }
// }


// function getHumanChoice() {
// const Rock = document.querySelector(".btn-1");
// Rock.addEventListener("click", playRound())
//     // let choice = prompt("Choose between, Rock, Paper, or Scissors");
//     // choice = choice.toLowerCase().trim();
//     // if(choice == "rock") {
//     //     return "rock";
//     // } else if(choice == "paper"){
//     //     return "paper";
//     // } else if(choice == "scissors"){
//     //     return "scissors";
//     // }else {
//     //     return "invalid input"
//     // }
// }

// playGame()