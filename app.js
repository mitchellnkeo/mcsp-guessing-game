// Create a prompt that takes in an input
// Return whether the input is correct or not!
// Create a function that can call the game
// Create a function that will replay the game

let nameInput = prompt("Hello! What is your name?")

gamePlay()

function gamePlay() {

const answer = Math.floor(Math.random() * 10);
console.log(answer)

let guess = prompt("Guess a number between 0 and 10.")
if (guess === null) {
    return}

const number = Number(guess);
const rangeCheck = (guess >= 0 && guess <= 10)
let guessCount = 0
let guessArray = []

while (guess !== answer){

if (Number.isNaN(number) === true) {
    alert("That isn't a number. Try again, " + nameInput + ".")
     guess = prompt("Guess a number between 0 and 10.")
}

if (guess < 0 || guess > 10){
    guessCount++
    guessArray.push(guess)
    alert("That's outside the range," + nameInput + ".")
     guess = prompt("Guess a number between 0 and 10.")
}
else if (guess < answer && rangeCheck) {
    alert("That's too low, " + nameInput + ".")
    guessCount++
    guessArray.push(guess)
     guess = prompt("Guess a number between 0 and 10.")
}
else if (guess > answer & rangeCheck) {
    alert("That's too high, " + nameInput + ".")
    guessCount++
    guessArray.push(guess)
     guess = prompt("Guess a number between 0 and 10.")
}
else {
    if (Number.isNaN(number) === false && rangeCheck) {
    alert("That's right! Good job, " + nameInput + ". It only took you " + guessCount + " attempts.")
    alert("Your previous guesses were " + guessArray + ".")
    replayGame()
    break
    } 
}
}
} 

function replayGame(){
    let replayAnswer = prompt("Would you like to play again?")
    let replayAnswerLower = replayAnswer.toLowerCase()
    if (replayAnswerLower[0] === "y") {
        gamePlay()
    }
    else {
        return alert("Thanks for playing!")
    }
}