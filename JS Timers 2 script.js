let seconds = 0;
let timer;

timer = setInterval(() => {
  seconds++;
  document.getElementById("timer").textContent = seconds;

  if (seconds >= 5) {
    document.getElementById("stopBtn").disabled = false;
  }
}, 1000);

document.getElementById("stopBtn").addEventListener("click", () => {
  clearInterval(timer);
  document.getElementById("timer").textContent = "Stopped at " + seconds + " seconds";
});

