// Randomly pick a letter 
var abc = "abcdefghijklmnopqrstuvwxyz";

var guessesSoFar = [];
var winCount = 0;
var lossCount = 0;
var guessesCount = 10;
var userGuess;


//Store the ID's of each span into a variable
var guessesText = document.getElementById("guesses-left");
var winsText = document.getElementById('wins');
var lossesText = document.getElementById('losses');
var lettersText = document.getElementById('guesses-so-far');

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
            winsText.textContent = winCount;
            lossesText.textContent = lossCount;
            guessesText.textContent = guessesCount;
            lettersText.textContent = guessesSoFar;
};



