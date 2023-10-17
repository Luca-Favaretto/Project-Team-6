// setInterval(function () {
//   console.log("Questa funzione verrà eseguita ogni 2000 ms.");
//   const numTimer = document.querySelector(".timer h2");

//   console.log(numTimer);
//   if (numTimer.innerText === "0") {
//     clearInterval(interval);
//     window.location.href = "#";
//   }

//   numTimer.innerText--;
// }, 1000);

function updateTimerAndChart() {
  const numTimer = document.querySelector(".timer h2");
  numTimer.innerText--;

  if (numTimer.innerText === "0") {
    clearInterval(interval);
    window.location.href = "#"; // Esegui azioni quando il timer raggiunge 0
  }

  // Aggiorna i dati del grafico a torta
  let data = {
    labels: ["Rimanente", "Passato"],
    datasets: [
      {
        data: [numTimer.innerText, 60 - numTimer.innerText], // Aggiorna il grafico con il tempo rimanente
        backgroundColor: ["red", "green"]
      }
    ]
  };
  myPieChart.data = data;
  myPieChart.update();
}

// Inizializza il grafico a torta con dati iniziali
var ctx = document.getElementById("myPieChart").getContext("2d");
var data = {
  labels: ["Rimanente", "Passato"],
  datasets: [
    {
      data: [60, 0], // 60 secondi iniziali rimanenti
      backgroundColor: ["red", "green"]
    }
  ]
};

var myPieChart = new Chart(ctx, {
  type: "pie",
  data: data
});

// Aggiorna i dati ogni secondo
var interval = setInterval(updateTimerAndChart, 1000);
