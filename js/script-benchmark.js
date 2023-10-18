const donutSegment = document.querySelector(".donut-segment");

function updateDashArray(value) {
  donutSegment.setAttribute("stroke-dasharray", value);
}

function updateTimer() {
  const currentValue = parseInt(numTimer.textContent, 10);
  if (currentValue > 0) {
    numTimer.textContent = (currentValue - 1).toString();
    const percentComplete = ((60 - currentValue) / 60) * 100;
    const dasharrayValue = `${percentComplete} ${100 - percentComplete}`;
    updateDashArray(dasharrayValue);
  } else {
    clearInterval(interval);
  }
}

const interval = setInterval(updateTimer, 1000);
