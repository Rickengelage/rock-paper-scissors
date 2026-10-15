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
console.log(getComputerChoice());
