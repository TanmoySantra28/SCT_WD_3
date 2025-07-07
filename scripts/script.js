const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");

let quizCategory = "JavaScript";
let currentQuestion = null;

//fetch a random question based on selected catagory
const getRandomQuestion = () => {
    const catagoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];
    
    const randomQuestion = catagoryQuestions[Math.floor(Math.random() * catagoryQuestions.length)];
    return randomQuestion;
}

//highlight the correct answer option and add icon
const highlightCorrectAnswer = () => {
    const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");
    //insert icon based on correctness
    const iconHTML = `<span class="material-symbols-rounded">${'check_circle'}</span>`; 
    correctOption.insertAdjacentHTML("beforeend", iconHTML);
}

//handle user's answer selection
const handleAnswer = (option, answerIndex) => {
    const isCorrect = currentQuestion.correctAnswer === answerIndex;
    option.classList.add(isCorrect ? 'correct' : 'incorrect');

    !isCorrect ? highlightCorrectAnswer() : "";

    //insert icon based on correctness
    const iconHTML = `<span class="material-symbols-rounded">${isCorrect ? 'check_circle' : 'cancel'}</span>`; 
    option.insertAdjacentHTML("beforeend", iconHTML);

    //disable other options after one option is selected
    answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");

    nextQuestionBtn.style.visibility = "visible";
}


//render the current question and its options
const renderQuestion = () => {
    currentQuestion = getRandomQuestion();
    
    if(!currentQuestion){
        return;
    }
    console.log(currentQuestion);

    //Update the questions
    answerOptions.innerHTML = "";
    nextQuestionBtn.style.visibility = "hidden";
    document.querySelector(".question-text").textContent = currentQuestion.question;
    
    //create option <li> elements and append them, and add click event listener
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", () => handleAnswer(li, index)); 

    });
}

renderQuestion();

nextQuestionBtn.addEventListener("click", renderQuestion);