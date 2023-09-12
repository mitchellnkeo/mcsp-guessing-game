// Create a prompt that takes in an input
// Return whether the input is correct or not!
// Create a function that can call the game
// Create a function that will replay the game
// Create an object that will store player name + guess count

// Global object to store game data
let statObject = {}

// Function for the number guessing game
function gamePlay() {
    let nameInput = prompt("Hello! What is your name?")
    const answer = Math.round(Math.random() * 10);
    console.log(answer)

    let guess = prompt("Guess a number between 0 and 10.")
    if (guess === null) {
        return 
       }

    const number = Number(guess);
    const rangeCheck = (guess >= 0 && guess <= 10)
    let guessArray = []

    while (guess !== answer){

    if (Number.isNaN(number) === true) {
        alert("That isn't a number. Try again, " + nameInput + ".")
         guess = prompt("Guess a number between 0 and 10.")
        }

    if (guess < 0 || guess > 10){
        guessArray.push(guess)
        alert("That's outside the range," + nameInput + ".")
         guess = prompt("Guess a number between 0 and 10.")
        }

    else if (guess < answer && rangeCheck) {
      alert("That's too low, " + nameInput + ".")
      guessArray.push(guess)
       guess = prompt("Guess a number between 0 and 10.")
        }

    else if (guess > answer && rangeCheck) {
        alert("That's too high, " + nameInput + ".")
     guessArray.push(guess)
      guess = prompt("Guess a number between 0 and 10.")
        }

    else {
     if (Number.isNaN(number) === false && rangeCheck) {
        alert("That's right! Good job, " + nameInput + ". It only took you " + guessArray.length + " attempts.")
        alert("Your previous guesses were " + guessArray + ".")
        compareStats(nameInput, guessArray.length)
        replayGame()
        break
            } 
        }
 }
} 

// Function for replay
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

// Function to store and compare game stats
function compareStats(name, numGuesses){
	if (statObject.hasOwnProperty(name)) {
	    let scoreDifference = numGuesses - statObject[name]
		if (scoreDifference < 0) {
        let scoreNumber = Math.abs(scoreDifference) 
		  alert("You guessed correctly with " + scoreNumber + " less attempts than last time.")
		} else {
		  alert("On your last round, you guessed correctly in " + statObject[name] + " guesses. Unforunately, this was not better.")
        } 
	} 
		statObject[name] = numGuesses
}

// START GAME HERE
gamePlay()