setInterval(function () {
  console.log("Questa funzione verrà eseguita ogni 2000 ms.");
  const numTimer = document.querySelector(".timer h2");

  console.log(numTimer);
  if (numTimer.innerText === "0") {
    clearInterval(interval);
    window.location.href = "#";
  }

  numTimer.innerText--;
}, 1000);

let myCanvas = document.getElementById("myPieChart").getContext("2d");
let myLabels = ["Rimanente", "Passato"];
let myDati = [numTimer.innerText, 60 - numTimer.innerText];

let chart = new Chart(myCanvas, {
  type: "doughnut",
  data: {
    labels: myLabels,
    datasets: [
      {
        label: "time",
        data: myDati,
        backroundColor: ["red", "green"]
      }
    ]
  },
  option
});
