var questions = [
  {
    question: "HTML Stands For_______________________",
    options: [
      "Hypertext Makeup Language",
      "HTML",
      "CSS",
      "Hypertext Markup Language",
    ],
    correctAnswer: "Hypertext Markup Language",
  },
  {
    question: "CSS Stands For _______________________",
    options: [
      "Casecading Style Sheet",
      "Java",
      "Ram",
      "Hypertext markup language",
    ],
    correctAnswer: "Casecading Style Sheet",
  },
  {
    question: "JS Stands For _______________________",
      options: [
          "Java Style",
          "Java Script",
          "Script",
          "SRC",
      ],
    correctAnswer: "Java Script",
  },
  {
    question: "DOM Stands For _______________________",
    options: [
      "Document Object Model",
      "Date of Markup",
      "Data Operation Manager",
      "JAVA",
    ],
    correctAnswer: "Document Object Model",
  },
  {
    question: "RAM Stands For _______________________",
      options: [
          "Read Only Memory",
          "Dom",
          "Random Acccess Memory",
          "For Pc"
      ],
    correctAnswer: "Random Acccess Memory",
  },
  {
    question: "ROM Stands For _______________________",
    options: [
      "Reading Operation Manager",
      "Right On Margin",
      "HTml",
      "Read Only Memory",
    ],
    correctAnswer: "Read Only Memory",
  },
];

var currentQuestion = 0;
var totalMarks = 0;

function startQuiz() {
  showQuestion();
}

function showQuestion() {
  var questionContainer = document.getElementById("question-container");
  var optionsContainer = document.getElementById("options-container");
  var questionNumber = document.getElementById("question-number");

  questionNumber.textContent = `Question ${currentQuestion + 1}`;
  questionContainer.textContent = questions[currentQuestion].question;
  optionsContainer.innerHTML = "";

  questions[currentQuestion].options.forEach((option, index) => {
    var optionSpan = document.createElement("span");
    optionSpan.textContent = option;
    optionSpan.onclick = () => checkAnswer(option);

    optionsContainer.appendChild(optionSpan);
  });
}

function checkAnswer(selectedAnswer) {
  var correctAnswer = questions[currentQuestion].correctAnswer;

  if (selectedAnswer === correctAnswer) {
    totalMarks++;
  }

  showCorrectAnswer(correctAnswer);
}

function showCorrectAnswer(correctAnswer) {
  var popup = document.getElementById("popup");
  var overlay = document.getElementById("overlay");
  var correctAnswerElement = document.getElementById("correct-answer");

  correctAnswerElement.textContent = correctAnswer;

  popup.style.display = "block";
  overlay.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  var overlay = document.getElementById("overlay");

  popup.style.display = "none";
  overlay.style.display = "none";

  nextQuestion();
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  var quizContainer = document.getElementById("quiz-container");
  var resultContainer = document.getElementById("result-container");
  var totalMarksElement = document.getElementById("total-marks");
  var percentageElement = document.getElementById("percentage");
  var startAgainButton = document.getElementById("start-again");

  quizContainer.style.display = "none";
  resultContainer.style.display = "block";

  var percentage = (totalMarks / questions.length) * 100;
  totalMarksElement.textContent = totalMarks;
  percentageElement.textContent = percentage.toFixed(2);

  startAgainButton.style.display = "block";
}

function restartQuiz() {
  currentQuestion = 0;
  totalMarks = 0;

  var quizContainer = document.getElementById("quiz-container");
  var resultContainer = document.getElementById("result-container");
  var startAgainButton = document.getElementById("start-again");

  quizContainer.style.display = "block";
  resultContainer.style.display = "none";
  startAgainButton.style.display = "none";

  startQuiz();
}

startQuiz();
