let minsEl = document.getElementById("mins");
let secsEl = document.getElementById("secs");
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");

let mins = 25;
let secs = 0;
let timer = null;

function timeDisplay() {
  minsEl.innerText = mins.toString().padStart(2, "0");
  secsEl.innerText = secs.toString().padStart(2, "0");
}

startBtn.addEventListener("click", function start() {
  if (timer === null) {
    timer = setInterval(function countdown() {
      if (secs === 0) {
        if (mins === 0) {
          clearInterval(timer);
          timer = null;
          return;
        }
        mins--;
        secs = 59;
      } else {
        secs--;
      }
      timeDisplay();
    }, 1000);
  }
});

pauseBtn.addEventListener("click", function pause() {
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
});

resetBtn.addEventListener("click", function reset() {
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
  mins = 25;
  secs = 0;
  timeDisplay();
});
