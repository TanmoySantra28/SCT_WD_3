const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".time-duration");
const resultContainer = document.querySelector(".result-container");

const quizTimeLimit = 15;
let currentTime = quizTimeLimit;
let timer = null;
let quizCategory = "JavaScript";
let numberOfQuestions = 5;
let currentQuestion = null;
const questionsIndexHistory = [];
let correctAnswerCount = 0;
let questions = [];

const loadQuestions = async () => {
    try {
        const response = await fetch("questions.json");
        const data = await response.json();
        questions = data;
    } catch (error) {
        console.error("Failed to load questions:", error);
        alert("Error loading questions. Please try again later.");
    }
};

const showQuizResult = () => {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    const resultText = `You answered <b>${correctAnswerCount}</b> out of <b>${numberOfQuestions}</b> questions correctly!`;
    document.querySelector(".result-message").innerHTML = resultText;
};

const resetTimer = () => {
    clearInterval(timer);
    currentTime = quizTimeLimit;
    timerDisplay.textContent = `${currentTime}s`;
};

const startTimer = () => {
    timer = setInterval(() => {
        currentTime--;
        timerDisplay.textContent = `${currentTime}s`;

        if (currentTime <= 0) {
            clearInterval(timer);
            highlightCorrectAnswer();
            nextQuestionBtn.style.visibility = "visible";
            quizContainer.querySelector(".quiz-timer").style.background = "#c31402";

            answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
        }
    }, 1000);
};

const getRandomQuestion = () => {
    const categoryObj = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase());
    const categoryQuestions = categoryObj?.questions || [];

    if (questionsIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions)) {
        return showQuizResult();
    }

    const availableQuestions = categoryQuestions.filter((_, index) => !questionsIndexHistory.includes(index));
    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];

    questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
    return randomQuestion;
};

const highlightCorrectAnswer = () => {
    const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");
    const iconHTML = `<span class="material-symbols-rounded">check_circle</span>`;
    correctOption.insertAdjacentHTML("beforeend", iconHTML);
};

const handleAnswer = (option, answerIndex) => {
    clearInterval(timer);
    const isCorrect = currentQuestion.correctAnswer === answerIndex;
    option.classList.add(isCorrect ? 'correct' : 'incorrect');

    !isCorrect ? highlightCorrectAnswer() : correctAnswerCount++;

    const iconHTML = `<span class="material-symbols-rounded">${isCorrect ? 'check_circle' : 'cancel'}</span>`;
    option.insertAdjacentHTML("beforeend", iconHTML);

    answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");

    nextQuestionBtn.style.visibility = "visible";
};

const renderQuestion = () => {
    currentQuestion = getRandomQuestion();

    if (!currentQuestion) {
        return;
    }

    resetTimer();
    startTimer();

    answerOptions.innerHTML = "";
    nextQuestionBtn.style.visibility = "hidden";
    quizContainer.querySelector(".quiz-timer").style.background = "#32313C";
    document.querySelector(".question-text").textContent = currentQuestion.question;
    questionStatus.innerHTML = `<b>${questionsIndexHistory.length}</b> of <b>${numberOfQuestions}</b> Questions`;

    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", () => handleAnswer(li, index));
    });
};

const startQuiz = () => {
    configContainer.style.display = "none";
    quizContainer.style.display = "block";

    quizCategory = configContainer.querySelector(".catagory-option.active").textContent;
    numberOfQuestions = parseInt(configContainer.querySelector(".Question-option.active").textContent);

    renderQuestion();
};

document.querySelectorAll(".catagory-option, .Question-option").forEach(option => {
    option.addEventListener("click", () => {
        option.parentElement.querySelector(".active").classList.remove("active");
        option.classList.add("active");
    });
});

const resetQuiz = () => {
    resetTimer();
    correctAnswerCount = 0;
    questionsIndexHistory.length = 0;
    configContainer.style.display = "block";
    resultContainer.style.display = "none";
};

nextQuestionBtn.addEventListener("click", renderQuestion);
document.querySelector(".try-again-btn").addEventListener("click", resetQuiz);

document.querySelector(".start-quiz-btn").addEventListener("click", async () => {
    await loadQuestions();
    startQuiz();
});