var startButton = document.getElementById("start");

/* 
pseudo-code

*/
var timerText = document.getElementById("timerText");
var wordText = document.getElementById("wordText");
var winText = document.getElementById("win");
var loseText = document.getElementById("lose");
var wordBank = ["cheese","hippopotamus","submarine", "programmer"];

var userInput = []
var wordIndex = ""
var wins = 0
var lose = 0

wordText.innerHTML = wordBank[0];
function startGame() {
 
    function newWord (){
    var chosenWord = Math.floor(Math.random() * wordBank.length)
    console.log(chosenWord) 
    }
   


  function timer() {
    var secondsLeft = 15;
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


function compare(){
    /*if (word === userWord){
        increment the score
    }else if (word !== userWord{
        increment the loss
    }else {
        "please make a guess"
    }*/
}
compare()
// I want the timer to start counting down when the start button is pressed

startButton.addEventListener("click", startGame);
