let randomNumber = Math.random()
function getComputerChoice() {
    if (randomNumber >= 0 && randomNumber < 0.4) {
        return "Rock";
    }
    else if (randomNumber >= 0.4 && randomNumber < 0.7) {
        return "Paper";
    }
    else (randomNumber >= 0.7 && randomNumber < 1) 
        return "Scissors";
    }

let humanChoice = prompt("Enter your choice: Press 'r' for rock, 'p' for paper and 's' for scissors")  
function getHumanChoice(){
    if (humanChoice == 'r') {
        return "Rock"
    }
    else if (humanChoice == 'p') {
        return "Paper"
    }
    else if (humanChoice == 's') {
        return "Scissors"
    }
    else {
        return "Invalid character. Try again."
    }
}    
console.log(randomNumber)    
console.log(getComputerChoice())
console.log(getHumanChoice())    