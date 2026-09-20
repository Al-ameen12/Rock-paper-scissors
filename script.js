console.log("Hello World!")

// Get Human's choice
function getHumanChoice(hchoice) {
    hchoice = prompt("Enter your choice between - Rock, Paper, Scissors.")
    return hchoice
}

// Get computer's choice
function getComputerChoice(choices) {
    
    choices = ['Rock', 'Paper', 'Scissors']
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

const humanScore = 0
const comptuerScore = 0

function playRound(humanChoice, computerChoice) {
    

    if (humanChoice === computerChoice) {
        console.log("A tie!!")
    }else if (humanChoice === 'ROCK' && computerChoice === 'PAPER' || humanChoice === 'PAPER' && computerChoice === 'ROCK'){
        if (humanChoice === 'PAPER') {
            console.log(`You won!! you beat ${computerChoice}`)
        }else {
            console.log(`Computer Won!! it chooses ${computerChoice}`)
        }
        // console.log("PAPER won!! it beats ROCK")

    }else if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS' || humanChoice === 'SCISSORS' && computerChoice === 'ROCK'){
        if (humanChoice === 'ROCK') {
            console.log(`You won!! you beat ${computerChoice}`)
        }else {
            console.log(`Computer Won!! it chooses ${computerChoice}`)
        }
        // console.log("ROCK won!! it beats SCISSORS")
    }else if (humanChoice === 'SCISSORS' && computerChoice === 'PAPER' || humanChoice === 'PAPER' && computerChoice === 'SCISSORS'){
        if (humanChoice === 'SCISSORS') {
            console.log(`You won!! you beat ${computerChoice}`)
        }else {
            console.log(`Computer Won!! it chooses ${computerChoice}`)
        }
        // console.log("SCISSORS won! it beats PAPER")
    }
}

const humanSelection = getHumanChoice().toUpperCase();
const computerSelection = getComputerChoice().toUpperCase();


playRound(humanSelection, computerSelection);
