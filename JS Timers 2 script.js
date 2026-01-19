let timerId;
let seconds = 0;

document.getElementById("startBtn").addEventListener("click", () => {
    if (timerId) return;

    timerId = setInterval(() => {
       seconds++;
      document.getElementById("output").textContent = seconds;
    }, 1000);
});
