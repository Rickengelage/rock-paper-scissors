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
console.log(getComputerChoice());

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
console.log(getHumanChoice());