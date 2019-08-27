// Randomly pick a letter 
var abc = "abcdefghijklmnopqrstuvwxyz";

var guessesSoFar = [];
var winCount = 0;
var lossCount = 0;
var guessesCount = 10;


//Store the ID's of each span into a variable
var userGuess = document.getElementById("guesses-so-far");
var wins = document.getElementById("wins");
var loses = document.getElementById("loses");
document.getElementById("guesses-left");

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {
            userGuess.textContent = event.key;
            var randomLetter = abc[Math.floor(Math.random()*26)];
                //and display the whole string
                // Concatenate letter in "your guesses, so far" string
            guessesSoFar.push(userGuess); 

            // Compare computer's choice with user's choice. Are they equal??
            if (randomLetter == userGuess) {
                //Increase wins variable and , 
                winCount++;
                document.getElementById('wins').innerHTML = winCount;
            } else {
                // Increase number of Losses and decrease guesses
                lossCount++;
                document.getElementById('losses').innerHTML = lossCount;
            }
            // decrease guesses regardless of wining or losing
                guessesCount--;
                console.log(randomLetter); // SANITY CHECK
                console.log("Guesses left: " + guessesCount);
                document.getElementById('guesses-left').innerHTML = guessesCount;

                //restart the game w/o refreshing page until guessesLeft = 0
};



