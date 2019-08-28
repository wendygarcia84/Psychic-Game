// Randomly pick a letter 
var abc = "abcdefghijklmnopqrstuvwxyz";

var guessesSoFar = [];
var winCount = 0;
var lossCount = 0;
var guessesCount = 10;
var userGuess;


//Store the ID's of each span into a variable
 //var guessesText = document.getElementById("guesses-so-far");
// var wins = document.getElementById("wins");
// var losses = document.getElementById("losses");
document.getElementById("guesses-left");

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {
            userGuess = event.key;
            var randomLetter = abc[Math.floor(Math.random()*26)];
                //and display the whole string
                // Concatenate letter in "your guesses, so far" string 
            guessesSoFar.push(userGuess);
            // Compare computer's choice with user's choice. Are they equal??
            if (randomLetter === userGuess) {
                //Increase wins variable and , 
                winCount++;
                guessesCount = 10;
                guessesSoFar = [];
            } else {
            // decrease guesses regardless of wining or losing
                guessesCount--;
            }
                //restart the game w/o refreshing page until guessesLeft = 0
            if (guessesCount === 0) {
                lossCount++;
                guessesCount = 10;
                guessesSoFar = [];
            }
            document.getElementById('wins').innerHTML = winCount;
            document.getElementById('losses').innerHTML = lossCount;
            document.getElementById('guesses-left').innerHTML = guessesCount;
            document.getElementById('guesses-so-far').innerHTML = guessesSoFar;
};



