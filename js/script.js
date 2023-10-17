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

    for (let i = 0; i < 10; i++) {
      starImg[i].classList.add("star-gray");
    }

    for (let i = 0; i < indexImg + 1; i++) {
      starImg[i].classList.remove("star-gray");
    }
  });
});

const btnMoreInfo = document.getElementById("btn-more-info");
btnMoreInfo.onclick = function (e) {
  e.preventDefault()(
    (window.location.href =
      "https://epicode.com/it/?utm_source=adwords&utm_campaign=Brand&utm_adgroup=brandexact&utm_term=epicode&utm_medium=ppc&hsa_acc=1246633295&hsa_cam=11897141170&hsa_grp=115607542236&hsa_ad=639941169967&hsa_src=g&hsa_tgt=kwd-1083842420863&hsa_kw=epicode&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=EAIaIQobChMIsMOv14b9gQMVij8GAB3rZwfFEAAYASAAEgK1kfD_BwE")
  );
};
