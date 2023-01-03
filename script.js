var startButton = document.getElementById("start")
/* 
pseudo-code

I want to see a button on the html so that i can start the game
i want an input field to enter 
*/
var timerText = document.getElementById("timerText") 

function timer(){
    
    var secondsLeft = 60
    var setTimer = setInterval(function (){
        secondsLeft--
        timerText.textContent = "Time left: " + secondsLeft
        timerText.setAttribute("style", "color: red")
        if (secondsLeft ===0){
            clearInterval(setTimer)
        }
    }, 1000)
}



// I want the timer to start counting down when the start button is pressed

startButton.addEventListener("click", timer());
