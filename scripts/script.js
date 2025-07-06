
let quizCategory = "JavaScript";

const getRandomQuestion = () => {
    const catagoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase());
    console.log(catagoryQuestions);
}

getRandomQuestion();