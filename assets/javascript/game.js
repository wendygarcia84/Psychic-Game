// Randomly pick a letter 
var abc = "abcdefghijklmnopqrstuvwxyz";
var randomLetter = abc[Math.floor(Math.random()*26)];
console.log(randomLetter); // SANITY CHECK

var guessesSoFar = [];
var wins = 0;
var loses = 0;
var guessesLeft = 10;

do {}
// Prompt user for a guess
var userGuess = prompt("Guess what letter I'm thinking of");

// Concatenate letter in "your guesses, so far" string
guessesSoFar.push(userGuess); 
console.log(userGuess); //SANITY CHECK

//and display the whole string

// Compare computer's choice with user's choice. Are they equal??
if (randomLetter == userGuess.toLowerCase()) {
    //Increase wins variable and , 
    wins++;
} else {
    // Increase number of Losses and decrease guesses
    loses--;
}
// decrease guesses regardless of wining or losing
    guessesLeft--;

    //restart the game w/o refreshing page until guessesLeft = 0
