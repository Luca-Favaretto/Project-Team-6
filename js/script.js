// const checkbox = document.getElementById("ceckbox-welcome");
// const btnProced = document.getElementById("proced-button");
// btnProced.addEventListener("click", function () {

//   checkbox.checked
//     ? (window.location.href = "./beanchmark.html")
//     : console.log("da ceckare");
// });

setInterval(function () {
  const numTimer = document.querySelector(".timer h2");

  console.log(numTimer);
  if (numTimer === 0) {
    window.location.href = "#";
  }

  numTimer.innerText--;
}, 1000);
