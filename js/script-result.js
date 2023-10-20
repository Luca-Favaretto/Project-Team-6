//grazie al count poit in entrata il grafico a torta viene modificato di conseguenza
const donutSegment = document.querySelector(".donut-segment1");

const editPie = function () {
  countPoint *= 10;

  let wrongAnswer = 100 - countPoint;

  donutSegment.setAttribute(
    "stroke-dasharray",
    ` ${wrongAnswer} ${countPoint}`
  );

  //prende la zona di sinistra corretta e la modifica in base al risultato
  const correctPercent = document.getElementById("correct");
  const correctPercent1 = document.getElementById("correct-1");

  correctPercent.innerText = countPoint + "%";
  correctPercent1.innerText = countPoint / 10 + "/10 questions";

  //prende la zona di destra sbagliata e la modifica in base al risultato

  const wrongPercent = document.getElementById("wrong");
  const wrongPercent1 = document.getElementById("wrong-1");
  console.log(wrongPercent1);

  wrongPercent.innerText = wrongAnswer + "%";
  wrongPercent1.innerText = wrongAnswer / 10 + "/10 questions";

  //per modificare pie text

  const textPie1 = document.getElementById("result-pie");
  console.log(textPie1.textContent);

  const textPie2 = document.getElementById("result-pie2");
  console.log(textPie2.textContent);

  const textPie3 = Array.from(document.querySelectorAll("#result-pie2 ~ text"));
  console.log(textPie3);

  if (countPoint < 60) {
    textPie1.textContent = "Ci dispice!!";
    textPie2.textContent = "Hai fallito l'esame";
    textPie3.forEach(text => (text.textContent = ""));

    textPie2.setAttribute("y", 22);
    textPie2.setAttribute("font-size", 3);
    textPie2.setAttribute("fill", "red");
    textPie2.setAttribute("y", 22);
  }
};
// pulsante che manda al feedback

const reteUsBtn = document.getElementsByClassName("rate-us-button")[0];
reteUsBtn.onclick = function () {
  window.location.href = "feedback.html";
};
