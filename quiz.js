const apiUrl = 'https://opentdb.com/api.php?amount=5&category=18&type=multiple'; // Adjust the amount and category as needed

let quizData = [];

async function fetchQuestions() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    quizData = data.results.map((question) => ({
      question: question.question,
      options: [...question.incorrect_answers, question.correct_answer],
      correctAnswer: question.correct_answer,
    }));
    loadQuestion();
  } catch (error) {
    console.error('Error fetching questions:', error);
  }
}

// Rest of the code remains the same
let currentQuestionIndex = 0;
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const messageContainer = document.getElementById("message-container");
// ...

let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    optionsContainer.innerHTML = "";
  
    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => checkAnswer(option));
      optionsContainer.appendChild(button);
    });
  }
  
  // ...

  function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    const buttons = document.querySelectorAll('#options-container button');
  
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
      displayMessage("Correct! Yalla, next question.");
      buttons.forEach((button) => {
        if (button.textContent === selectedOption) {
          button.classList.add('correct');
        }
      });
    } else {
      displayMessage("Wrong answer. Try again!");
      buttons.forEach((button) => {
        if (button.textContent === selectedOption) {
          button.classList.add('wrong');
        }
        if (button.textContent === currentQuestion.correctAnswer) {
          button.classList.add('correct');
        }
      });
    }
  
    setTimeout(() => {
      buttons.forEach((button) => {
        button.classList.remove('correct', 'wrong'); // Remove color classes
        button.disabled = false; // Enable all buttons after a short delay
      });
  
      currentQuestionIndex++;
  
      if (currentQuestionIndex < quizData.length) {
        loadQuestion();
      } else {
        displayResult();
      }
    }, 2000); // 2000 milliseconds = 2 seconds
  }  

function displayMessage(message) {
  messageContainer.textContent = message;
}

function displayResult() {
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `<h2>Your Score: ${score}/${quizData.length}</h2>`;
  
    // Automatically start a new quiz after 5 seconds
    setTimeout(() => {
      resultContainer.innerHTML = ''; // Clear the result container
      score = 0; // Reset the score
      currentQuestionIndex = 0; // Reset the question index
      fetchQuestions(); // Fetch new questions
    }, 5000); // 5000 milliseconds = 5 seconds
  }

// Initial load
fetchQuestions();