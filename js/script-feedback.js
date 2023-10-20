const starContainer = document.getElementById("star-container");
console.log(starContainer);
const starImg = Array.from(document.getElementsByClassName("star"));
console.log(starImg);

starImg.forEach((img) => {
  img.addEventListener("click", function (e) {
    const indexImg = starImg.indexOf(e.target);

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

const formfeedback = document.getElementById("form-feedback").addEventListener("submit", function (e) {
  e.preventDefault();

  const feedbackMain = document.getElementById("feedback-main");

  const numStarGray = Array.from(document.getElementsByClassName("star-gray")).length;
  const faccina = document.createElement("p");
  const titolo = document.createElement("h1");
  titolo.classList.add("h1Feedback");
  if (numStarGray < 2) {
    console.log(numStarGray + " 9-10");
    while (feedbackMain.firstChild) {
      feedbackMain.removeChild(feedbackMain.firstChild);
    }

    titolo.innerText = "Grazie per il tuo feedback";
    faccina.innerHTML = `
      <img
      
      
      src="https://www.freeiconspng.com/uploads/lover-emoji-png-6.png" width="350"
        alt="lover emoji png"
        style="
    display: inline-block;
    margin-top: 7rem;
    margin-left: 20%;"
      />
    `;

    feedbackMain.appendChild(titolo);
    feedbackMain.appendChild(faccina);
  } else if (numStarGray < 4) {
    console.log(numStarGray + " 8-7");
    while (feedbackMain.firstChild) {
      feedbackMain.removeChild(feedbackMain.firstChild);
    }
    titolo.innerText = "Grazie per il tuo feedback";
    faccina.innerHTML = `
      <img
        src="https://emojiisland.com/cdn/shop/products/Slightly_Smiling_Face_Emoji_87fdae9b-b2af-4619-a37f-e484c5e2e7a4_large.png?v=1571606036" width="350
        alt="faccina sorridente"
        style="
    display: inline-block;
    margin-top: 7rem;
    margin-left: 20%;"
      />
    `;
    feedbackMain.appendChild(titolo);
    feedbackMain.appendChild(faccina);
  } else if (numStarGray < 5) {
    console.log(numStarGray + " 6");
    while (feedbackMain.firstChild) {
      feedbackMain.removeChild(feedbackMain.firstChild);
    }
    titolo.innerText = "Grazie per il tuo feedback";
    faccina.innerHTML = `
      <img
      
      src="https://www.freeiconspng.com/uploads/sad-emoji-png-8.png" width="350"
      alt="sad emoji png"
        style="
    display: inline-block;
    margin-top: 7rem;
    margin-left: 20%;"
      />
    `;
    feedbackMain.appendChild(titolo);
    feedbackMain.appendChild(faccina);
  } else {
    console.log(numStarGray + " <6");
    while (feedbackMain.firstChild) {
      feedbackMain.removeChild(feedbackMain.firstChild);
    }
    titolo.innerText = "Grazie per il tuo feedback";
    faccina.innerHTML = `
      <img
      src="https://www.freeiconspng.com/uploads/crying-emoji-png-10.png" width="350"
        alt="crying emoji png"
        style="
    display: inline-block;
    margin-top: 7rem;
    margin-left: 20%;"
      />
    `;
    feedbackMain.appendChild(titolo);
    feedbackMain.appendChild(faccina);
  }
});
