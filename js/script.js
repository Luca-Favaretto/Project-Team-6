setInterval(function () {
  console.log("Questa funzione verrà eseguita ogni 2000 ms.");
  const numTimer = document.querySelector(".timer h2");

  console.log(numTimer);

  numTimer.innerText--;
}, 1000);
