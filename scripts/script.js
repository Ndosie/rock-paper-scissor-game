function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissor']
    const randomChoice = Math.floor(Math.random() * 3)

    return choices[randomChoice]
}

function getHumanChoice() {
    return prompt();
}

function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        if (humanChoice.toLowerCase() === computerChoice) {
            console.log(`Its a tie. Computer Choice ${computerChoice} and Human Choice ${humanChoice}`)
        }

        if (computerChoice === 'paper' && humanChoice.toLowerCase() === 'rock') {
            console.log(`You lose! Paper covers the rock`)
            computerScore++;
        }

        if (computerChoice === 'rock' && humanChoice.toLowerCase() === 'paper') {
            console.log(`You won! Paper covers the Rock`)
            humanScore++;
        }

        if (computerChoice === 'scissor' && humanChoice.toLowerCase() === 'paper') {
            console.log(`You lose! Scissor cuts Paper`)
            computerScore++;
        }

        if (computerChoice === 'paper' && humanChoice.toLowerCase() === 'scissor') {
            console.log(`You won! Scissor cuts Paper`)
            humanScore++;
        }

        if (computerChoice === 'rock' && humanChoice.toLowerCase() === 'scissor') {
            console.log(`You lose! Rock crush Scissors`)
            computerScore++;
        }

        if (computerChoice === 'scissor' && humanChoice.toLowerCase() === 'rock') {
            console.log(`You won! Rock crush Scissors`)
            humanScore++;
        }
    }

    const rounds = 5

    for (let roundCounter = 1; roundCounter <= rounds; roundCounter++){
        playRound(getHumanChoice(), getComputerChoice())
    }

    if (humanScore === computerScore) {
        console.log(`No winner. Your Score is ${humanScore} and Computer Score is ${computerScore}.`)
    } else {
        if (humanScore > computerScore) {
            console.log(`You are the winner. Your Score is ${humanScore} and Computer Score is ${computerScore}.`)
        } else {
            console.log(`You lose!. Your Score is ${humanScore} and Computer Score is ${computerScore}.`)
        }
    }
}

playGame()