const checkbox = document.getElementById("accettazioneCondizioni");
const proceedButton = document.getElementById("proced-button");
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    proceedButton.disabled = false;
  } else {
    proceedButton.disabled = true;
  }
});
