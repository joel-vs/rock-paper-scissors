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
        continue
    }
      else {
        alert("Invalid Character, try again. Press 'r' for rock, 'p' for paper and 's' for scissors")   
        continue
      }
    }  
} 


function playRound(humanChoice,computerChoice) {
    if (computerChoice=== 'Rock' && humanChoice === 'Paper') {
        return "You win! Paper beats Rock."
    }
    else if (computerChoice === 'Paper' && humanChoice === 'Rock') {
        return "You lose! Paper beats Rock."
        
    }
    else if (computerChoice === 'Rock' && humanChoice === 'Scissors') {
        return "You lose! Rock beats Scissors."
    }
    else if (computerChoice === 'Scissors' && humanChoice === 'Rock') {
        return "You win! Rock beats Scissors."
    }
    else if (computerChoice === 'Paper' && humanChoice === 'Scissors') {
        return "You win! Scissors beats Paper."
    }
    else if (computerChoice === 'Scissors' && humanChoice === 'Paper') {
        return "You lose! Scissors beats paper."
        
    }
    else if (computerChoice === 'Paper' && humanChoice === 'Paper' || computerChoice === 'Scissors' && humanChoice === 'Scissors' || computerChoice === 'Rock' && humanChoice === 'Rock') {
        return "It's a draw."
    }

}

function playGame() {
    counter = 0
    let humanScore = 0
    let computerScore = 0
    while (counter < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection,computerSelection)
        if (result == 'You win! Paper beats Rock.' || result == "You win! Rock beats Scissors." || result == "You win! Scissors beats Paper.") {
            humanScore += 1
        }
        else if (result == "You lose! Paper beats Rock." || result== "You lose! Rock beats Scissors." || result == "You lose! Scissors beats paper.") {
            computerScore += 1
        }
        console.log ('You:',humanSelection)
        console.log('Computer:',computerSelection)
        console.log(result)
        counter += 1
    }
    if (humanScore > computerScore) {
        return `You won the game. You scored ${humanScore} points out of 5 and computer scored ${computerScore} points out of 5`
    }
    else if (computerScore > humanScore) {
        return `Computer won the game. You scored ${humanScore} points out of 5 and computer scored ${computerScore} points out of 5`
    }
    else {
        return `It's a tie. You scored ${humanScore} points out of 5 and computer scored ${computerScore} points out of 5`
    }
}

  
console.log(playGame()) 