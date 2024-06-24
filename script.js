function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        return "Rock";
    }
    else if (computerChoice === 1) {
        return "Paper";
    }
    else if (computerChoice === 2) 
        return "Scissors";
    }
  
function getHumanChoice(){
    while (true){
      let humanChoice = prompt("Enter your choice: Press 'r' for rock, 'p' for paper and 's' for scissors")
      if (humanChoice === 'r') {
          return "Rock"
      }
      else if (humanChoice === 'p') {
          return "Paper"
      }
      else if (humanChoice === 's') {
          return "Scissors"
      }
      else if (humanChoice === null) {
        return "Rock"
    }
      else {
        alert("Invalid Character, try again. Press 'r' for rock, 'p' for paper and 's' for scissors")   
        continue
      }
    }  
} 
   
let humanScore = 0
let computerScore = 0
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


function playRound(humanChoice,computerChoice) {
    if (computerChoice=== 'Rock' && humanChoice === 'Paper') {
        return "You win! Paper beats Rock."
        humanScore += 1
    }
    else if (computerChoice === 'Paper' && humanChoice === 'Rock') {
        return "You lose! Paper beats Rock."
        computerScore += 1
    }
    else if (computerChoice === 'Rock' && humanChoice === 'Scissors') {
        return "You lose! Rock beats Scissors."
        computerScore += 1
    }
    else if (computerChoice === 'Scissors' && humanChoice === 'Rock') {
        return "You win! Rock beats Scissors."
        humanScore += 1
    }
    else if (computerChoice === 'Paper' && humanChoice === 'Scissors') {
        return "You win! Scissors beats Paper."
        humanScore += 1
    }
    else if (computerChoice === 'Scissors' && humanChoice === 'Paper') {
        return "You lose! Scissors beats paper."
        computerScore += 1
    }
    else if (computerChoice === 'Paper' && humanChoice === 'Paper' || computerChoice === 'Scissors' && humanChoice === 'Scissors' || computerChoice === 'Rock' && humanChoice === 'Rock') {
        return "It's a draw."
    }
}

console.log(humanSelection)
console.log(computerSelection)  
console.log(playRound(humanSelection, computerSelection)) 
