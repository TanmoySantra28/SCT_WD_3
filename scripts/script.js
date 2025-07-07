const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");

let quizCategory = "JavaScript";


//fetch a random question based on selected catagory
const getRandomQuestion = () => {
    const catagoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];
    
    const randomQuestion = catagoryQuestions[Math.floor(Math.random() * catagoryQuestions.length)];
    return randomQuestion;
}

//render the current question and its options
const renderQuestion = () => {
    const currentQuestion = getRandomQuestion();
    
    if(!currentQuestion){
        return;
    }
    console.log(currentQuestion);

    //Update the questions
    answerOptions.innerHTML = "";
    document.querySelector(".question-text").textContent = currentQuestion.question;
    
    //create option <li> elements and append them
    currentQuestion.options.forEach(option => {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li);
    });
}

renderQuestion();

nextQuestionBtn.addEventListener("click", renderQuestion);