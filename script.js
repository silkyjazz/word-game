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

timer()