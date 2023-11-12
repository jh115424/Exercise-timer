let startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
let paused = true;
let duration = 0;



startButton.addEventListener("click", function () {
    timer();
    paused = false;
  });
  const timerLeft = document.getElementById("timerLeft");
  
  const stopButton = document.getElementById("stop");
  
  stopButton.addEventListener("click", function () {
    if (paused) {
      paused = false;
      timerLeft.textContent = duration;
      stopButton.textContent = "Pause";
      console.log("Timer restarted");
    } else {
      paused = true;
      timerLeft.textContent = "Paused..";
      stopButton.textContent = "Restart";
      console.log("Timer stopped");
    }
  });
  
  resetButton.addEventListener("click", function () {
    paused = true;
    timerLeft.textContent = "0";
    duration = 0;
    console.log("Timer reset");
    clearInterval(timer);
  });
  
  const timer = () =>
    setInterval(() => {
      if (!paused) {
        duration++;
        timerLeft.textContent = duration;
        console.log(duration);
      }
    }, 1000);