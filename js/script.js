setInterval(function () {
  console.log("Questa funzione verrà eseguita ogni 2000 ms.");
  const numTimer = document.querySelector(".timer h2");

  console.log(numTimer);
  if (numTimer === 0) {
    window.location.href = "#";
  }

  numTimer.innerText--;
}, 1000);
