const checkbox = document.getElementById("ceckbox-welcome");
const btnProced = document.getElementById("proced-button");
btnProced.addEventListener("click", function () {
  checkbox.checked
    ? (window.location.href = "benckmarck-page.html")
    : console.log("da ceckare");
});

// ("change", function () {
//   if (checkbox.checked) {
//     proceedButton.disabled = false;
//   } else {
//     proceedButton.disabled = true;
//   }
// });
