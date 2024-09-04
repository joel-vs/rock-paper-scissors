const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const constainer = document.querySelector('#container');
const buttons = document.getElementsByTagName('button');

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    let computerChoice = null;
    if (randomNumber === 0) {
        computerChoice = "Rock";
    }
    else if (randomNumber === 1) {
        computerChoice = "Paper";
    }
    else if (randomNumber === 2) {
        computerChoice = "Scissors";
    };
    return computerChoice;
};

function playRound(humanChoice,computerChoice) {
    if ((computerChoice=== 'Rock' && humanChoice === 'Paper') || (computerChoice === 'Scissors' && humanChoice === 'Rock') || (computerChoice === 'Paper' && humanChoice === 'Scissors')) {
        return "You win";
    }
    else if ((computerChoice === 'Paper' && humanChoice === 'Rock') || (computerChoice === 'Rock' && humanChoice === 'Scissors') || (computerChoice === 'Scissors' && humanChoice === 'Paper')) {
        return "You lose";
        
    }
    else if ((computerChoice === 'Paper' && humanChoice === 'Paper') || (computerChoice === 'Scissors' && humanChoice === 'Scissors') || (computerChoice === 'Rock' && humanChoice === 'Rock')) {
        return "It's a tie";
    };
};

function disableButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    };
};

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function checkGameEnd() {
        if (humanScore === 5 || computerScore=== 5) {
            if (humanScore > computerScore) {
                console.log('You won the game');
                disableButtons();
            }
            else if (computerScore > humanScore) {
                console.log('You lost the game');
                disableButtons();
            };  
        };
    };

    rock.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        const round = playRound('Rock',computerChoice)
        if (round === 'You win') {
            humanScore++;
            console.log('Rock', computerChoice, humanScore, computerScore);
        } 
        else if(round === "You lose") {
            computerScore++;
            console.log('Rock', computerChoice, humanScore, computerScore);
        }
        else if(round === "It's a tie") {
            console.log('Rock', computerChoice, humanScore, computerScore);
        }    
        checkGameEnd();
    });
    
    paper.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        const round = playRound('Paper',computerChoice)
        if (round === 'You win') {
            humanScore++;
            console.log('Paper', computerChoice, humanScore, computerScore);
        } 
        else if(round === "You lose") {
            computerScore++;
            console.log('Paper', computerChoice, humanScore, computerScore);
        }
        else if(round === "It's a tie") {
            console.log('Paper', computerChoice, humanScore, computerScore);
        };    
        checkGameEnd();
    });
    
    scissors.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        const round = playRound('Scissors',computerChoice)
        if (round === 'You win') {
            humanScore++;
            console.log('Scissors', computerChoice, humanScore, computerScore);
        } 
        else if(round === "You lose") {
            computerScore++;
            console.log('Scissors', computerChoice, humanScore, computerScore);
        }
        else if(round === "It's a tie") {
            console.log('Scissors', computerChoice, humanScore, computerScore);
        };    
        checkGameEnd();
    });
};

playGame();