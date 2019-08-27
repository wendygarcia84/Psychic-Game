// Randomly pick a letter 
var abc = "abcdefghijklmnopqrstuvwxyz";
var randomLetter = abc[Math.floor(Math.random()*26)];
console.log(randomLetter);

var guessesSoFar = [];
var wins = 0;
var loses = 0;
var guessesLeft = 10;

// Prompt user for a guess
var userGuess = prompt("Guess what letter I'm thinking of");

// Concatenate letter in "your guesses, so far" string, and display the whole string
guessesSoFar.push(userGuess);
console.log(userGuess);
// Compare computer's choice with user's choice. Are they equal??
            //Increase wins variable and decrease guesses, restart the game w/o refreshing page
// If not equal
            // Increase number of Losses and decrease guesses, restart the game w/o refreshing