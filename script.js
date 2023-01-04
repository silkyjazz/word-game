var startButton = document.getElementById("start");
/* 
pseudo-code

*/
var timerText = document.getElementById("timerText");
var wordText = document.getElementById("wordText");
var wordBank = ["cat", "fish", "bird"];

wordText.innerHTML = wordBank[0];
function startGame() {
 

  function timer() {
    console.log("hello");
    var secondsLeft = 60;
    var setTimer = setInterval(function () {
      secondsLeft--;
      timerText.textContent = "Time left: " + secondsLeft;
      timerText.setAttribute("style", "color: red");
      if (secondsLeft === 0) {
        clearInterval(setTimer);
      }
    }, 1000);
  }
  timer()
}

/* function compare(userWord, word, win, loss){
    var userWord = input.value;

    userWord.innerHTML = userWord
  
    if (word === userWord){
        increment the score
    }else if (word !== userWord{
        increment the loss
    }else {
        "please make a guess"
    
}
compare() 
*/

// I want a function that prompts the user to type the rest of letters to guess the full word
function guessWorld(word){
  // prompt the user to fill in the rest of the word
  var inputElement = document.getElementById("input");
  inputElement.value = "t_s_";
  // inputElement.textContent = "Please enter your guessed word here"

  // check if the guess is correct
  if(inputElement.value === "word"){
    console.log("You got it right!");
  }
  else{
    console.log("Sorry, that's not correct. Try again");
  }

  // Render the guess to the webpage
  // var inputElement = document.getElementById("input");
  // outputElement.textContent = guess;

}
guessWorld("test");


// I want the timer to start counting down when the start button is pressed

startButton.addEventListener("click", startGame);
