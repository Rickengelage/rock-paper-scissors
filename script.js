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
const rockBtn = document.querySelector(".btn-1")
rockBtn.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
    
});

// function playGame(){

let humanScoreBoard = 0;
let computerScoreBoard = 0;
let roundCounter = 1;

const displayContainer = document.querySelector(".roundDisplay");
    const currentRound = document.createElement("h1");
    //adding the h1 to dom
    currentRound.classList.add("currentRound");
    //appending h1 as child of btn contianer div//
   displayContainer.appendChild(currentRound);
    //chaning the text of the h1
    currentRound.textContent = "start the first round by choosing rock, paper or scissors!";




function playRound(humanScore, computerScore) {
    // let humanScore = getHumanChoice();
    // let computerScore = getComputerChoice();

if (humanScore == "Rock" ) {
    
    currentRound.textContent = "round" + " " + roundCounter++;
    // text showing what your choice was//
    const container = document.querySelector(".btn-container");
    const choice = document.createElement("h3");
    choice.classList.add("choice");
    container.appendChild(choice);
    choice.textContent = "you choose rock !";
    // console.log("ROUND" + " " + roundCounter + "...");
    // console.log("you choose rock!");
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
    const container = document.querySelector(".btn-container");
    const computerChoice = document.createElement("h3")
    computerChoice.classList.add("computerChoice")
    container.appendChild(computerChoice);
    computerChoice.textContent = "the computer chooses paper, therefor the computer wins this round"

    // console.log("the computer chooses paper, therefor the computer wins this round")
    computerScoreBoard++;
}else if(humanScore == "Rock" && computerScore == "scissors"){
    console.log("the computer chooses scissors! YOU WIN!")
    humanScoreBoard++;
}else if(humanScore == "Rock" && computerScore == "rock"){
    console.log("the computer chooses rock too, its a tie!");
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