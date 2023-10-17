setInterval(function () {
  const numTimer = document.querySelector(".timer h2");

  console.log(numTimer);
  if (numTimer === 0) {
    window.location.href = "#";
  }

  numTimer.innerText--;
}, 1000);
