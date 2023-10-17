// welcome
// const checkbox = document.getElementById("ceckbox-welcome");
// const btnProced = document.getElementById("proced-button");
// btnProced.addEventListener("click", function () {
//   checkbox.checked
//     ? (window.location.href = "benckmarck-page.html")
//     : console.log("da ceckare");
// });

// feedback

const starContainer = document.getElementById("star-container");
console.log(starContainer);
const starImg = Array.from(document.getElementsByClassName("star"));
console.log(starImg);

starImg.forEach(img => {
  img.addEventListener("click", function (e) {
    const indexImg = starImg.indexOf(e.target);
    console.log(indexImg);

    for (let i = 0; i < indexImg + 1; i++) {
      starImg[i].classList.remove("star-gray");
    }
  });
});
