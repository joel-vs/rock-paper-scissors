const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const constainer = document.querySelector('#container');
const buttons = document.getElementsByTagName('button');
const roundResult = document.querySelector('.round');
const playerChoices = document.querySelector('.result');
const playerIcon = document.querySelector('.playerIcon');
const computerIcon = document.querySelector('.computerIcon');
const playerScore = document.querySelector('.playerScore');
const computerScoreDiv = document.querySelector('.computerScore');
const finalResult = document.createElement('div');
finalResult.className = "finalResult";
const iconParent = document.querySelector('.iconParent');
const buttonsDiv = document.querySelector('.buttons');
buttonsDiv.insertBefore(finalResult, buttonsDiv.firstElementChild);

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = null;
    if (randomNumber === 0) {
        computerChoice = "rock";
    }
    else if (randomNumber === 1) {
        computerChoice = "paper";
    }
    else if (randomNumber === 2) {
        computerChoice = "scissors";
    };
    return computerChoice;
};

function playRound(humanChoice,computerChoice) {
    if ((computerChoice=== 'rock' && humanChoice === 'Paper') || (computerChoice === 'scissors' && humanChoice === 'Rock') || (computerChoice === 'paper' && humanChoice === 'Scissors')) {
        return "You win";
    }
    else if ((computerChoice === 'paper' && humanChoice === 'Rock') || (computerChoice === 'rock' && humanChoice === 'Scissors') || (computerChoice === 'scissors' && humanChoice === 'Paper')) {
        return "You lose";
        
    }
    else if ((computerChoice === 'paper' && humanChoice === 'Paper') || (computerChoice === 'scissors' && humanChoice === 'Scissors') || (computerChoice === 'rock' && humanChoice === 'Rock')) {
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
                finalResult.textContent = 'You won the game. Reload the page to play again.';
                disableButtons();
            }
            else if (computerScore > humanScore) {
                finalResult.textContent = 'You lost the game. Reload the page to play again.';
                disableButtons();
            };  
        };
    };

    rock.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        const round = playRound('Rock',computerChoice);
        if (round === 'You win') {
            humanScore++;
            playerChoices.textContent = `Rock beats ${computerChoice}`;
        } 
        else if(round === "You lose") {
            computerScore++;
            playerChoices.textContent = `Rock is beaten by ${computerChoice}`;
        }
        else if(round === "It's a tie") {
            playerChoices.textContent = 'Rock ties with rock';
        } 
        roundResult.textContent = round; 
        playerScore.textContent = `You: ${humanScore}`;
        computerScoreDiv.textContent = `Computer: ${computerScore}`;      
        playerIcon.textContent = '✊' ;
        if (computerChoice === 'rock') {
            computerIcon.textContent = '✊';
        }
        else if(computerChoice === 'paper') {
            computerIcon.textContent = '✋';
        }
        else {
            computerIcon.textContent = '✌️';
        }  
        checkGameEnd();
    });
    
    paper.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        const round = playRound('Paper',computerChoice);
        if (round === 'You win') {
            humanScore++;;
            playerChoices.textContent = `Paper beats ${computerChoice}`;
        }
        else if(round === "You lose") {
            computerScore++;
            playerChoices.textContent = `Paper is beaten by ${computerChoice}`;
        }
        else if(round === "It's a tie") {
            playerChoices.textContent = `Paper ties with paper`;
        };  
        roundResult.textContent = round; 
        playerScore.textContent = `You: ${humanScore}`;
        computerScoreDiv.textContent = `Computer: ${computerScore}`;       
        playerIcon.textContent = '✋'; 
        if (computerChoice === 'rock') {
            computerIcon.textContent = '✊';
        }
        else if(computerChoice === 'paper') {
            computerIcon.textContent = '✋';
        }
        else {
            computerIcon.textContent = '✌️';
        };       
        checkGameEnd();
    });
    
    scissors.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        const round = playRound('Scissors',computerChoice);
        if (round === 'You win') {
            humanScore++;
            playerChoices.textContent = `Scissors beats ${computerChoice}`;
        } 
        else if(round === "You lose") {
            computerScore++;
            playerChoices.textContent = `Scissors is beaten by ${computerChoice}`;
        }
        else if(round === "It's a tie") {
            playerChoices.textContent = `Scissors ties with Scissors`;
        }; 
        roundResult.textContent = round;  
        playerScore.textContent = `You: ${humanScore}`;
        computerScoreDiv.textContent = `Computer: ${computerScore}`;       
        playerIcon.textContent = '✌️'; 
        if (computerChoice === 'rock') {
            computerIcon.textContent = '✊';
        }
        else if(computerChoice === 'paper') {
            computerIcon.textContent = '✋';
        }
        else {
            computerIcon.textContent = '✌️';
        };    
        checkGameEnd();
    });
};

playGame();