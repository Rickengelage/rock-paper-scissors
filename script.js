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

function getHumanChoice() {

    let choice = prompt("Choose between, Rock, Paper, or Scissors");
    choice = choice.toLowerCase().trim();
    if(choice == "rock") {
        return "rock";
    } else if(choice == "paper"){
        return "paper";
    } else if(choice == "scissors"){
        return "scissors";
    }else {
        return "invalid input"
    }
}

function playGame(){

let humanScoreBoard = 0;
let computerScoreBoard = 0;
let roundCounter = 0;


function playRound(humanScore, computerScore) {

if (humanScore == "rock") {
    roundCounter++
    console.log("ROUND" + " " + roundCounter + "...");
    console.log("you choose rock!");
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

if(humanScore == "rock" && computerScore == "paper") {
    console.log("the computer chooses paper, therefor the computer wins this round")
    computerScoreBoard++;
}else if(humanScore == "rock" && computerScore == "scissors"){
    console.log("the computer chooses scissors! YOU WIN!")
    humanScoreBoard++;
}else if(humanScore == "rock" && computerScore == "rock"){
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
for (let i=0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}
if (humanScoreBoard > computerScoreBoard) {
 console.log("YAY! you won from the computer! well done.");
}else if(humanScoreBoard < computerScoreBoard){
    console.log("...OOFFF... you let the computer win! better luck next time.");
}else {
    console.log("The end result..... its a tie")
}
}

playGame()