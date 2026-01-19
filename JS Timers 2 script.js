let seconds = 0;
let intervalId = null;

const button = document.getElementById("startStopBtn");
const timerDisplay = document.getElementById("timer");

button.addEventListener("click", () => {
    if (intervalId === null) {

       intervalId = setInterval(() => {
           seconds++;
           timerDisplay.textContent = seconds;
       }, 1000);
       button.textContent = "Stop";
    } else {

        clearInterval(intervalId);
        intervalId = null;
        button.textContent = "Start";
    }
});
