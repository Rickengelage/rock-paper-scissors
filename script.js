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
const playBtn = document.querySelector(".startGame")
const playNow = document.createElement("button")
playNow.classList.add("playNow")
playBtn.appendChild(playNow)
playNow.textContent = "PLAY NOW"
playNow.setAttribute("style", "padding: 48px; border: green 2px solid; border-radius: 25px; background-color: #42f566;")
playNow.addEventListener("click", () => {
    playNow.remove();
    playgame();
})


function playgame(){


//the rock choice button
const rockBtn = document.querySelector(".btn-1")
rockBtn.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
    
});
// the paper choice button
const paperBtn = document.querySelector(".btn-2")
paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    
});
//the scissors choice button
const scissorsBtn = document.querySelector(".btn-3")
scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    
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
playGame()

//function that plays each round when clicked a choice
function playRound(humanScore, computerScore) {
if (humanScore == "Rock" ) {
    //updating what round we are on
    currentRound.textContent = "round" + " " + roundCounter++ + " " + "of 5";
    //displaying what choice was made by human
    choiceDisplay.textContent = "you choose Rock !"
   
} else if(humanScore == "paper") {
    //updating what round we are on
    currentRound.textContent = "round" + " " + roundCounter++ + " " + "of 5";
     //displaying what choice was made by human
    choiceDisplay.textContent = "you choose Paper !"

} else if(humanScore == "scissors"){
    //updating what round we are on
    currentRound.textContent = "round" + " " + roundCounter++ + " " + "of 5";
    //displaying what choice was made by human
    choiceDisplay.textContent = "you choose scissors !"
}else {
    console.log("invalid input");
}

//rock section
if(humanScore == "Rock" && computerScore == "paper") {
    //updated the computer scorebaord when he wins
    computerScoreBoard++
    //updated the computer scoreboard text after he won a round, adding 1 to his score
    computerPoints.textContent = "computer Score is:" + " " + computerScoreBoard;
    machineDisplay.textContent = "the computer chooses paper, therefor the computer wins this round."
    machineDisplay.setAttribute("style" ,"color: red");
    
}else if(humanScore == "Rock" && computerScore == "scissors"){
    //update the scoreboard by 1 when human wins one round
    humanScoreBoard++;
    //updating the human scoreboard text
    humanPoints.textContent = "Your Score is:" + " " + humanScoreBoard;
   //displaying the computer choice as an h3
    machineDisplay.textContent = "the computer chooses scissors! YOU WIN!"
    machineDisplay.setAttribute("style" ,"color: green");
}else if(humanScore == "Rock" && computerScore == "rock"){
    machineDisplay.textContent = "the computer chooses rock too, its a tie!"
    machineDisplay.setAttribute("style" ,"color: gray");
   
//paper section
}else if(humanScore == "paper" && computerScore == "rock") {
    //update the scoreboard
    humanScoreBoard++;
    //updating human scoreboard because human won
    humanPoints.textContent = "Your Score is:" + " " + humanScoreBoard;
    //display the computer choice and who won the round
    machineDisplay.textContent = "the computer chooses rock! YOU WIN!"
    //change the color to green because human wom
    machineDisplay.setAttribute("style" ,"color: green");
}else if(humanScore == "paper" && computerScore == "paper") {
    machineDisplay.textContent = "the computer chooses paper too! its a tie!"
    machineDisplay.setAttribute("style" ,"color: gray");
}else if(humanScore == "paper" && computerScore == "scissors"){
    //updating the scoreboard
    computerScoreBoard++;
    // updating the computer scoreboard because computer won this round
    computerPoints.textContent = "computer Score is:" + " " + computerScoreBoard;
    //displaying the computer text and who won the round
    machineDisplay.textContent = "the computer chooses scissors, therefor the computer wins this round."
    // changing the displayed text to red because the computer won this round
    machineDisplay.setAttribute("style" ,"color: red");

    //scissors section
}else if(humanScore == "scissors" && computerScore == "rock") {
    //updating the scoreboad
    computerScoreBoard++;
    // updating the computer scoreboard because computer won this round
    computerPoints.textContent = "computer Score is:" + " " + computerScoreBoard;
    //displaying the computer text and who won the round
    machineDisplay.textContent = "the computer chooses rock, therefor the computer wins this round."
    // changing the displayed text to red because the computer won this round
    machineDisplay.setAttribute("style" ,"color: red");
}else if(humanScore == "scissors" && computerScore == "paper") {
    //updating the scoreboad
    humanScoreBoard++;
    //updating human scoreboard because human won
    humanPoints.textContent = "Your Score is:" + " " + humanScoreBoard;
    //display the computer choice and who won the round
    machineDisplay.textContent = "the computer chooses paper! YOU WIN!"
    //change the color to green because human wom
    machineDisplay.setAttribute("style" ,"color: green");
}else if(humanScore == "scissors" && computerScore == "scissors"){
    machineDisplay.textContent = "the computer chooses scissors too! its a tie!"
    machineDisplay.setAttribute("style" ,"color: gray");
}else {
    console.log("invalid input")
}
if(roundCounter > 5){
    rockBtn.remove()
    paperBtn.remove()
    scissorsBtn.remove()
    choiceDisplay.textContent = "Final round played!"
    machineDisplay.textContent = "the machine had" + " " + computerScoreBoard + " " + "points" + " "  + "while you have" + " " + humanScoreBoard + " " + "points."
    if( computerScoreBoard > humanScoreBoard) {
        const endresult = document.querySelector(".choiceContainer");
        const result = document.createElement("h1");
        result.classList.add("result");
        endresult.appendChild(result);
        result.textContent = "therefor the computer wins"
        result.setAttribute("style", "color: red");
        //create button to play again
        const newGame = document.querySelector(".btn-container")
        const playAgain = document.createElement("button");
        playAgain.classList.add("playAgain")
        newGame.appendChild(playAgain)
        playAgain.textContent = "PLAY AGAIN"
        //add event listener to the play again button that will refresh the page
         playAgain.addEventListener("click", () => {
            window.location.reload();
        })
    }else if ( computerScoreBoard < humanScoreBoard){
        //new text that will display who won the 5 rounds
        const endresultHuman = document.querySelector(".choiceContainer");
        const resultHumanWin = document.createElement("h1");
        resultHumanWin.classList.add("resultHumanWin");
        endresultHuman.appendChild(resultHumanWin);
        resultHumanWin.textContent = "therefor the computer wins"
        resultHumanWin.setAttribute("style", "color: red;")
        //create button that will refresh page to play again
        const newGame = document.querySelector(".btn-container")
        const playAgain = document.createElement("button");
        playAgain.classList.add("playAgain")
        newGame.appendChild(playAgain)
        playAgain.textContent = "PLAY AGAIN"
        //add event listener to the play again button that will refresh the page
        playAgain.addEventListener("click", () => {
            window.location.reload();
        })
    }

 
}
}
}