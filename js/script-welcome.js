const checkbox = document.getElementById("ceckbox-welcome");
const btnProced = document.getElementById("proced-button");
btnProced.addEventListener("click", function () {
  checkbox.checked
    ? (window.location.href = "benckmarck.html")
    : console.log("da ceckare");
});
let b = 0;
