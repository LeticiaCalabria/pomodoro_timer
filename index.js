const timerEl = document.getElementById("timer");
const startBtnEl = document.getElementById("start-btn");
const stopBtnEl = document.getElementById("stop-btn");
const resetBtnEl = document.getElementById("reset-btn");

let interval;
let timeLeft = 1500;

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
            alert("Time's up!"); 
            timeLeft = 1500;
            updateTimer();
        } 
    }, 1000);

}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

startBtnEl.addEventListener("click", startTimer);
stopBtnEl.addEventListener("click", stopTimer);
resetBtnEl.addEventListener("click", resetTimer);

