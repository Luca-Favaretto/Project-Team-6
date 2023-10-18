// import { countPoint } from "../js/script-benchmark.js";
const reteUstBtn = document.getElementsByClassName("rate-us-button")[0];
console.log(reteUstBtn);
reteUstBtn.onclick = function () {
  window.location.href = "feedback.html";
};

let countPoint = 3;

//grazie al count poit in entrata il grafico a torta viene modificato di conseguenza
const donutSegment = document.querySelector(".donut-segment1");
countPoint *= 10;
let wrongAnswer = 100 - countPoint;
donutSegment.setAttribute("stroke-dasharray", `${countPoint} ${wrongAnswer}`);

const correctPercent = document.getElementById("correct");
const correctPercent1 = document.getElementById("correct1");

correctPercent.innerText = countPoint + "%";
correctPercent1.innerText = countPoint / 10 + "/10";

const wrongPercent = document.getElementById("wrong");
const wrongPercent1 = document.getElementById("wrong1");

wrongPercent.innerText = wrongAnswer + "%";
wrongPercent1.innerText = wrongAnswer / 10 + "/10";
