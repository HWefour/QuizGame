const questions = [
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { answer: "Au", isCorrect: true },
      { answer: "Ag", isCorrect: false },
      { answer: "Fe", isCorrect: false },
      { answer: "Hg", isCorrect: false },
    ],
  },
  {
    question: "Which club has won the most Champions league ?",
    answers: [
      { answer: "Barcelona", isCorrect: false },
      { answer: "Juventus", isCorrect: false },
      { answer: "Real madrid", isCorrect: true },
      { answer: "Psg", isCorrect: false },
    ],
  },
  {
    question: "Who is holding the current record for the 100m dash ?",
    answers: [
      { answer: "Usain Bolt", isCorrect: true },
      { answer: "Asafa Powell", isCorrect: false },
      { answer: "Tyson Gay", isCorrect: false },
      { answer: "Christophe lemaitre", isCorrect: false },
    ],
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: [
      { answer: "William Shakespeare", isCorrect: true },
      { answer: "Charles Dickens", isCorrect: false },
      { answer: "Jane Austen", isCorrect: false },
      { answer: "Mark Twain", isCorrect: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { answer: "Venus", isCorrect: false },
      { answer: "Mars", isCorrect: true },
      { answer: "Jupiter", isCorrect: false },
      { answer: "Saturn", isCorrect: false },
    ],
  },
];

const indexQst = document.getElementById("questionNbr");
const QuestionsText = document.getElementById("questions");
const answerList = document.getElementById("answers");
const nextButton = document.getElementById("questionbutton");
const app = document.getElementById("quizzApp");
const texts = document.querySelector(".texts");

let indexQuestion = 0;
let score = 0;
let qstLength = questions.length;


function quiz() {
  indexQuestion = 0;
  score = 0;
  showQuestion();
}

function nextQuestion() {
  indexQuestion++;
  if (indexQuestion < qstLength) {
    showQuestion();
  } else {
    showScore();
  }
}

function showQuestion() {
  let question = questions[indexQuestion];
  let questionNbr = indexQuestion + 1;
  indexQst.innerHTML = "Question " + questionNbr + "/" + qstLength;
  QuestionsText.innerHTML = question.question;

  answerList.innerHTML = "";

  question.answers.forEach((element) => {
    let button = document.createElement("button");
    button.innerHTML = element.answer;
    button.classList.add("button-answer");
    answerList.appendChild(button);

    button.addEventListener("click", () => {
      if (element.isCorrect === true) {
        button.style.background = "green";
        score = score + 1;
        console.log(score);
      } else {
        button.style.background = "red";
      }

      const answerButtons = document.querySelectorAll("button-answer");
      answerButtons.forEach((btn) => {
        btn.disabled = true;
      });

      setTimeout(nextQuestion, 1000);
    });
  });

  nextButton.style.display = "none";
}

function showScore() {
  let title = document.createElement("h2");
  let img = document.createElement("img");
  let scoreText = document.createElement("h3");

  QuestionsText.style.display = "none";
  answerList.style.display = "none";
  nextButton.style.display = "none";
  texts.style.display= "none";

  if (score < 5) {
    title.innerHTML = "Game Over";
    img.src = "./img/skull.png";
  } else {
    title.innerHTML = "Congratulations!!";
    img.src = './img/fireworks.png';
  }

  scoreText.innerHTML = `You've got ${score} good answers out of ${qstLength} !!`;

  app.appendChild(title);
  app.appendChild(img);
  app.appendChild(scoreText);

  indexQst.style.display = "none";

  nextButton.innerHTML = "Try Again";
  nextButton.style.display = "block";
  nextButton.addEventListener("click", () => {
    title.style.display = "none";
    img.style.display = "none";
    scoreText.style.display = "none";
    indexQst.style.display = "block";

    QuestionsText.style.display = "block";
    answerList.style.display = "block";
    nextButton.style.display = "block";
    texts.style.display= "block";
    quiz();
  });
}


quiz(); 