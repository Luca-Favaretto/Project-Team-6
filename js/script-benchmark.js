const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"]
  }
];

const shuffleArray = function (array) {
  //funzione per dare dei numeri casuali tutti diversi in base alla lunghezza dell'array
  const rndNumArray = [];
  while (rndNumArray.length < array.length) {
    let rndNum;
    do {
      rndNum = Math.floor(Math.random() * array.length);
    } while (rndNumArray.includes(rndNum));
    rndNumArray.push(rndNum);
  }
  let mixArray = [];
  for (let i = 0; i < array.length; i++) {
    mixArray.push(array[rndNumArray[i]]);
  }
  return mixArray;
};
//per salvare dati
let countPoint = 0;
let countQuestion = 0;

//funzione che crea la benchmark
const createBenchmark = function () {
  //trovato div per collegare la pagina
  const numCorr = document.getElementById("beenchmark-footer");
  const questionDiv = document.getElementById("question-div");
  const answerDiv = document.getElementById("answer-div");

  while (questionDiv.firstChild) {
    questionDiv.removeChild(questionDiv.firstChild);
  }
  while (answerDiv.firstChild) {
    answerDiv.removeChild(answerDiv.firstChild);
  }

  //fuonzione cambia pagina quando finiscono le domande
  if (countQuestion >= questions.length) {
    window.location.href = "result-page.html";
  }
  //aggiorna la posizione della domanda nel footer
  numCorr.innerText = `QUESTION ${countQuestion + 1}`;

  //creazione domande
  const question = document.createElement("h1");
  question.innerText = questions[countQuestion].question;
  question.classList = "h1-beenchmark";
  questionDiv.appendChild(question);

  //creazione risposta corretta
  const firstBtn = document.createElement("button");
  firstBtn.innerText = questions[countQuestion].correct_answer;
  firstBtn.classList = "wait-button-color";
  answerDiv.appendChild(firstBtn);

  //AGGIUTA FUNZIONE DI CLICK alla risposta corretta

  firstBtn.addEventListener(
    "click",
    function () {
      firstBtn.classList = "answer-button-color";
      countPoint++;
      countQuestion++;

      setTimeout(function () {
        createBenchmark();
      }, 500);
      const resetTimer = (numTimer.textContent = "60");
    },
    { once: true }
  );
  //creazione risposte/a sbagliate
  questions[countQuestion].incorrect_answers.forEach(string => {
    const btn = document.createElement("button");
    btn.classList = "wait-button-color";
    btn.innerText = string;
    //AGGIUTA FUNZIONE DI CLICK alla risposta sbagliata
    btn.addEventListener(
      "click",
      function () {
        btn.classList = "answer-button-color";

        countQuestion++;

        setTimeout(function () {
          createBenchmark();
        }, 500);
        const resetTimer = (numTimer.textContent = "60");
      },
      { once: true }
    );

    answerDiv.appendChild(btn);
  });

  // Ottieni il contenitore e i suoi figli
  const arrayAnswer = Array.from(
    document.getElementsByClassName("wait-button-color")
  );

  // // Mescola l'array di box in modo casuale
  const mixArray = shuffleArray(arrayAnswer);

  // // Rimuovi i box dal contenitore
  arrayAnswer.forEach(button => answerDiv.removeChild(button));

  // // Aggiungi i box riordinati al contenitore
  mixArray.forEach(button => answerDiv.appendChild(button));
};
createBenchmark();

window.onload = function () {
  const interval = setInterval(updateTimer, 1000);
  const donutSegment = document.querySelector(".donut-segment");
  function updateDashArray(value) {
    donutSegment.setAttribute("stroke-dasharray", value);
  }
  function updateTimer() {
    const currentValue = parseInt(numTimer.textContent);
    if (currentValue > 0) {
      numTimer.textContent = (currentValue - 1).toString();
      const percentComplete = ((60 - currentValue) / 60) * 100;
      const dasharrayValue = `${percentComplete} ${100 - percentComplete}`;
      updateDashArray(dasharrayValue);
    } else {
      countQuestion++;
      const resetTimer = (numTimer.textContent = "60");
      createBenchmark();
    }
  }
};
