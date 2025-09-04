let humanScore = 0
let computerScore = 0
const buttonsDiv = document.querySelector('#buttons')
const msgDiv = document.querySelector('#message')
const pointsDiv = document.querySelector('#points')
const resultsDiv = document.querySelector('#results')
const messageParagraph = document.querySelector('#results p')
const buttons = document.querySelectorAll('#buttons button')
const replayBtn = document.querySelector('#replay')

buttons.forEach((button) => {
    button.addEventListener('click', () => playGame(button.id))
})

replayBtn.addEventListener('click', () => {
    buttonsDiv.style.display = 'block'
    resultsDiv.style.display = 'none'
})

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissor']
    const randomChoice = Math.floor(Math.random() * 3)

    return choices[randomChoice]
}

function playGame(humanChoice) {

    function playRound(humanChoice, computerChoice) {
        if (humanChoice.toLowerCase() === computerChoice) {
            msgDiv.textContent = `Its a tie. Computer Choice is ${computerChoice} and Your Choice is ${humanChoice}`
            pointsDiv.textContent = `Your points: ${humanScore}, Computer points: ${computerScore}`
        }

        if (computerChoice === 'paper' && humanChoice.toLowerCase() === 'rock') {
            msgDiv.textContent = `You lose! Paper covers the rock`
            computerScore++;
            pointsDiv.textContent = `Your points: ${humanScore}, Computer points: ${computerScore}`
        }

        if (computerChoice === 'rock' && humanChoice === 'paper') {
            msgDiv.textContent = `You won! Paper covers the Rock`
            humanScore++;
            pointsDiv.textContent = `Your points: ${humanScore}, Computer points: ${computerScore}`
        }

        if (computerChoice === 'scissor' && humanChoice === 'paper') {
            msgDiv.textContent = `You lose! Scissor cuts Paper`
            computerScore++;
            pointsDiv.textContent = `Your points: ${humanScore}, Computer points: ${computerScore}`
        }

        if (computerChoice === 'paper' && humanChoice === 'scissor') {
            msgDiv.textContent = `You won! Scissor cuts Paper`
            humanScore++;
            pointsDiv.textContent = `Your points: ${humanScore}, Computer points: ${computerScore}`
        }

        if (computerChoice === 'rock' && humanChoice === 'scissor') {
            msgDiv.textContent = `You lose! Rock crush Scissors`
            computerScore++;
            pointsDiv.textContent = `Your points: ${humanScore}, Computer points: ${computerScore}`
        }

        if (computerChoice === 'scissor' && humanChoice === 'rock') {
            msgDiv.textContent = `You won! Rock crush Scissors`
            humanScore++;
            pointsDiv.textContent = `Your points: ${humanScore}, Computer points: ${computerScore}`
        }

        if (humanScore === 5 || computerScore === 5) {
            buttonsDiv.style.display = 'none'
            resultsDiv.style.display = 'block'
            if (humanScore > computerScore) {
                messageParagraph.textContent = 'You are the WIIIINEERR! Congratulations.'
            } else {
                messageParagraph.textContent = 'You lose! We are sorry.'
            }
            msgDiv.textContent = ''
            pointsDiv.textContent = ''
            humanScore = 0
            computerScore = 0
        }
    }

    playRound(humanChoice, getComputerChoice())
}