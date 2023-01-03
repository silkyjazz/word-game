var startButton = document.getElementById("start");

/* 
pseudo-code

*/
var timerText = document.getElementById("timerText");
var wordText = document.getElementById("wordText");
var wordBank = ["cat", "fish", "bird"];

wordText.innerHTML = wordBank[0];
function startGame() {
 

<<<<<<< HEAD
    }
]


function counter() {
    var wins = w;
    var losses = l;
    for (let w = 0; w < winCount; w++) {
        for (let l = 0; l < lossCount; l++) {

}
=======
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

function compare(userWord, word, win, loss){
    /*if (word === userWord){
        increment the score
    }else if (word !== userWord{
        increment the loss
    }else {
        "please make a guess"
    }*/
}

// I want the timer to start counting down when the start button is pressed

startButton.addEventListener("click", startGame);
>>>>>>> 9741fcaede880aab5094132e864f5b9c83000194
