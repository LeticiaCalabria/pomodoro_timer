const titleEl = document.querySelector(".title");
const timerEl = document.getElementById("timer");
const startBtnEl = document.getElementById("start-btn");
const stopBtnEl = document.getElementById("stop-btn");
const resetBtnEl = document.getElementById("reset-btn");

let interval;
let timeLeft = 1500;
let isPomodoro = true;

function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timerEl.innerHTML = formattedTime;
}

function startTimer(){
    interval = setInterval(()=> {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0){
            clearInterval(interval);
            if (isPomodoro) {
                alert("Pomodoro finished! Time for a 5 minutes break!");
                startBreakTimer();
            } else {
                alert("Break is over! Back to study.")
                startPomodoroTimer();
            }
        } 
    }, 1000);

}

function startPomodoroTimer(){
    timeLeft = 1500;
    titleEl.innerHTML = "Pomodoro Timer";
    document.body.style.backgroundColor = "rgb(196, 231, 224)";
    isPomodoro = true;
    updateTimer();
    startTimer();
}

function startBreakTimer(){
    timeLeft = 300;
    titleEl.innerHTML = "Break Timer"
    document.body.style.backgroundColor = "#FFCCFF";
    isPomodoro = false;
    updateTimer();
    startTimer();
}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    timeLeft = isPomodoro ? 1500 : 300;
    updateTimer();
}

startBtnEl.addEventListener("click", startTimer);
stopBtnEl.addEventListener("click", stopTimer);
resetBtnEl.addEventListener("click", resetTimer);

updateTimer();

