let randomNum = Math.floor(Math.random() * 3);


function getComputerChoice(){   
    if (randomNum == 0) {
        return "Rock";
    } else if (randomNum == 1) {
        return "Paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice() {

    let choice = prompt("Choose between, Rock, Paper, or Scissors")
    if(choice == "Rock") {
        return "rock";
    } else if(choice == "paper"){
        return "paper";
    } else if(choice == "Scissors")
        return "scissors";
}
console.log(getHumanChoice());