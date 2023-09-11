// Create a prompt that takes in an input
// Return whether the input is correct or not!

const answer = Math.floor(Math.random() * 100) + 0;
console.log(answer)

let nameInput = prompt("Hello! What is your name?")
let guess = prompt("Guess a number between 0 and 100.")
const number = Number(guess);
const rangeCheck = (guess > 0 && guess < 100)
let guessCount = 0
let guessArray = []

while (guess !== answer){

if (Number.isNaN(number) === true) {
    alert("That isn't a number. Try again, " + nameInput + ".")
     guess = prompt("Guess a number between 0 and 100.")
}

if (guess < 0 || guess > 100){
    guessCount++
    guessArray.push(guess)
    alert("That's outside the range," + nameInput + ".")
     guess = prompt("Guess a number between 0 and 100.")
}
else if (guess < answer && rangeCheck) {
    alert("That's too low, " + nameInput + ".")
    guessCount++
    guessArray.push(guess)
     guess = prompt("Guess a number between 0 and 100.")
}
else if (guess > answer & rangeCheck) {
    alert("That's too high, " + nameInput + ".")
    guessCount++
    guessArray.push(guess)
     guess = prompt("Guess a number between 0 and 100.")
}
else {
    if (Number.isNaN(number) === false && rangeCheck) {
    alert("That's right! Good job, " + nameInput + ". It only took you " + guessCount + " attempts.")
    alert("Your previous guesses were " + guessArray + ".")
    break
    } 
}

} 