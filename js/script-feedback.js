const starContainer = document.getElementById("star-container");
console.log(starContainer);
const starImg = Array.from(document.getElementsByClassName("star"));
console.log(starImg);

starImg.forEach(img => {
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

const formfeedback = document
  .getElementById("form-feedback")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const feedbackMain = document.getElementById("feedback-main");

    const numStarGray = Array.from(
      document.getElementsByClassName("star-gray")
    ).length;
    const faccina = document.createElement("p");

    if (numStarGray < 2) {
      console.log(numStarGray + " 9-10");
      while (feedbackMain.firstChild) {
        feedbackMain.removeChild(feedbackMain.firstChild);
      }
      faccina.innerHTML = `
      <img
        src="https://images.unsplash.com/photo-1693087557029-9cbe5d2ef4f3?auto=format&fit=crop&q=80&w=2630&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="signorina"
        width="1000px"
      />
    `;
      feedbackMain.appendChild(faccina);
    } else if (numStarGray < 4) {
      console.log(numStarGray + " 8-7");
      while (feedbackMain.firstChild) {
        feedbackMain.removeChild(feedbackMain.firstChild);
      }
      faccina.innerHTML = `
      <img
        src="https://images.unsplash.com/photo-1683009427500-71296178737f?auto=format&fit=crop&q=80&w=2671&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="signorina"
        width="1000px"
      />
    `;
      feedbackMain.appendChild(faccina);
    } else if (numStarGray < 5) {
      console.log(numStarGray + " 6");
      while (feedbackMain.firstChild) {
        feedbackMain.removeChild(feedbackMain.firstChild);
      }
      faccina.innerHTML = `
      <img
        src="https://images.unsplash.com/photo-1696944871997-b449de2b488e?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="signorina"
        width="1000px"
      />
    `;
      feedbackMain.appendChild(faccina);
    } else {
      console.log(numStarGray + " <6");
      while (feedbackMain.firstChild) {
        feedbackMain.removeChild(feedbackMain.firstChild);
      }
      faccina.innerHTML = `
      <img
        src="https://images.unsplash.com/photo-1697128951378-e636f988c9cf?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="signorina"
        width="1000px"
      />
    `;
      feedbackMain.appendChild(faccina);
    }
  });
