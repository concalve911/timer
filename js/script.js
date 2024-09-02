"use strict";

let timeLeft = 90;

const timerElement = document.getElementById("timer");

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
}

function updateTimer() {
  timerElement.textContent = formatTime(timeLeft);

  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timerInterval);
    timerElement.textContent = "00:00";
  }
}

const timerInterval = setInterval(updateTimer, 1000);

updateTimer();
