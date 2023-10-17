setInterval(function () {
  console.log("Questa funzione verrà eseguita ogni 2000 ms.");
  const numTimer = document.querySelector(".timer h2");

  console.log(numTimer);
  if (numTimer === 0) {
    window.location.href = "#";
  }

  numTimer.innerText--;
}, 1000);

const circle = document.querySelector(".circle");
let degrees = 0;

function rotateCircle() {
  degrees += 1;
  circle.style.transform = "translate(-50%, -50%) rotate(${degrees}deg)";
}
setInterval(rotateCircle, 20);
