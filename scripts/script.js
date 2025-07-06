
let quizCategory = "JavaScript";

const getRandomQuestion = () => {
    const catagoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions;
    
    const randomQuestion = catagoryQuestions[Math.floor(Math.random() * catagoryQuestions.length)];

    console.log(randomQuestion);
}

getRandomQuestion();