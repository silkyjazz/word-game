var startButton = document.getElementById("start")
/* 
pseudo-code

I want to see a button on the html so that i can start the game
i want an input field to enter 
*/

var wordBank = [
    {
        word: "cat",
        letter1: "c",
        letter2: "a",
        letter3: "t",

    }
]


// I want the timer to start counting down when the start button is pressed

startButton.addEventListener("click", timer());