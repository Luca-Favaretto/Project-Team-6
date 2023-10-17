setInterval(function () {
  console.log("Questa funzione verrà eseguita ogni 2000 ms.");
  const numTimer = document.querySelector(".timer h2");

  console.log(numTimer);

  numTimer.innerText--;
}, 1000);

const grafico = document.getElementById("grafico");
let gradiRotazione = 0;

function ruotaGrafico() {
  gradiRotazione += 1;
  grafico.style.transform = "rotate(${gradiRotazione}deg)";
}
setInterval(ruotaGrafico, 1000 / 60);
