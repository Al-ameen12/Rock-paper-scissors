console.log("Hello World!")

// Get Human's choice
function getHumanChoice(hchoice) {
    hchoice = prompt("Enter your choice between - Rock, Paper, Scissors.").toUpperCase()
    return hchoice
}

// Get computer's choice
function getComputerChoice(choices) {
    
    choices = ['ROCK', 'PAPER', 'SCISSORS']
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    

    if (humanChoice === computerChoice) {
        console.log(`A tie!! you both chose ${humanChoice}`)
        alert(`A tie!! you both chose ${humanChoice}`)
    }else if (humanChoice === 'ROCK' && computerChoice === 'PAPER' || humanChoice === 'PAPER' && computerChoice === 'ROCK'){
        if (humanChoice === 'PAPER') {
            console.log(`You won!! ${humanChoice} covers ${computerChoice}`)
            alert(`You won!! ${humanChoice} covers ${computerChoice}`)
            humanScore++
        }else {
            console.log(`You lose!! ${computerChoice} covers ${humanChoice}`)
            alert(`You lose!! ${computerChoice} covers ${humanChoice}`)
            computerScore++
        }
        // console.log("PAPER won!! it beats ROCK")

    }else if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS' || humanChoice === 'SCISSORS' && computerChoice === 'ROCK'){
        if (humanChoice === 'ROCK') {
            console.log(`You won!! ${humanChoice} breaks ${computerChoice}`)
            alert(`You won!! ${humanChoice} breaks ${computerChoice}`)
            humanScore++
        }else {
            console.log(`You lose!! ${computerChoice} breaks ${humanChoice}`)
            alert(`You lose!! ${computerChoice} breaks ${humanChoice}`)
            computerScore++
        }
        // console.log("ROCK won!! it beats SCISSORS")
    }else if (humanChoice === 'SCISSORS' && computerChoice === 'PAPER' || humanChoice === 'PAPER' && computerChoice === 'SCISSORS'){
        if (humanChoice === 'SCISSORS') {
            console.log(`You won!! ${humanChoice} cuts ${computerChoice}`)
            alert(`You won!! ${humanChoice} cuts ${computerChoice}`)
            humanScore++
        }else {
            console.log(`You lose!! ${computerChoice} cuts ${humanChoice}`)
            alert(`You lose!! ${computerChoice} cuts ${humanChoice}`)
            computerScore++
        }
        // console.log("SCISSORS won! it beats PAPER")
    }

    
}




function playGame() {

    console.log("--- Round 1 ---");
    alert("--- Round 1 ---");
    playRound(getHumanChoice(), getComputerChoice())
    console.log("--- Round 2 ---");
    alert("--- Round 2 ---");
    playRound(getHumanChoice(), getComputerChoice())
    console.log("--- Round 3 ---");
    alert("--- Round 3 ---");
    playRound(getHumanChoice(), getComputerChoice())
    console.log("--- Round 4 ---");
    alert("--- Round 4 ---");
    playRound(getHumanChoice(), getComputerChoice())
    console.log("--- Round 5 ---");
    alert("--- Round 5 ---");
    playRound(getHumanChoice(), getComputerChoice())

    console.log("--- Game Over ---")
    alert("--- Game Over ---")
    console.log(`Your score: ${humanScore}`)
    alert(`Your score: ${humanScore}`)
    console.log(`Computer score: ${computerScore}`)
    alert(`Computer score: ${computerScore}`)

    if (humanScore > computerScore) {
        console.log("You Won!!")
        alert("You Won!!")

    }else if (humanScore < computerScore) {
        console.log("You lost!!")
        alert("You lost!!")
    }else {
        console.log("A tie!!")
        alert("A tie!!")
    }
}


playGame()

