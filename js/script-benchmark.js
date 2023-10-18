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

let countPunteggio = 0;
const createBenchmark = function (e) {
  const questionDiv = document.getElementById("question-div");
  const answerDiv = document.getElementById("answer-div");

  const question = document.createElement("h1");
  question.innerText = questions[9].question;
  question.classList = "h1-beenchmark";

  const firstBtn = document.createElement("button");
  firstBtn.innerText = questions[9].correct_answer;
  firstBtn.classList = "wait-button-color";
  firstBtn.addEventListener("click", function () {
    firstBtn.classList = "answer-button-color";
  });

  questions[9].incorrect_answers.forEach(string => {
    const btn = document.createElement("button");
    btn.classList = "wait-button-color";
    btn.innerText = string;
    btn.addEventListener("click", function () {
      btn.classList = "answer-button-color";
    });
    answerDiv.appendChild(btn);
  });

  answerDiv.appendChild(firstBtn);

  questionDiv.appendChild(question);
};
createBenchmark();
// const secondBtn = document.createElement("button");
// secondBtn.classList = "wait-button-color";
// secondBtn.innerText = questions[9].incorrect_answers[0];
// const thirdBtn = document.createElement("button");
// thirdBtn.classList = "wait-button-color";
// thirdBtn.innerText = questions[9].incorrect_answers[1];
// const fourthBtn = document.createElement("button");
// fourthBtn.classList = "wait-button-color";
// fourthBtn.innerText = questions[9].incorrect_answers[2];

// answerDiv.appendChild(secondBtn);
// answerDiv.appendChild(thirdBtn);
// answerDiv.appendChild(fourthBtn);

window.onload = function () {
  const interval = setInterval(updateTimer, 1000);

  const correctAnswer = [];
  const removeAnswerButton = () => {
    btn.classList.remove("answer-button-color");
  };

  //aggiunge span question num
  const numQuestions = document.getElementById("beenchmark-footer");
  const numCorr = document.createElement("span");
  numCorr.innerText = `QUESTION ${0}`;
  numCorr.classList = "question-color";
  numQuestions.appendChild(numCorr);

  //timer
  const donutSegment = document.querySelector(".donut-segment");

  function updateDashArray(value) {
    donutSegment.setAttribute("stroke-dasharray", value);
  }

  function updateTimer() {
    const currentValue = parseInt(numTimer.textContent, 10);
    if (currentValue > 0) {
      numTimer.textContent = (currentValue - 1).toString();
      const percentComplete = ((60 - currentValue) / 60) * 100;
      const dasharrayValue = `${percentComplete} ${100 - percentComplete}`;
      updateDashArray(dasharrayValue);
    } else {
      clearInterval(interval);
    }
  }
};
