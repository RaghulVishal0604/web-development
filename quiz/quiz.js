const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;

    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (selectedOption === correctAnswer) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
    }

    // Highlight the correct answer
    const options = optionsContainer.querySelectorAll(".option");
    options.forEach((option) => {
        if (option.textContent === correctAnswer) {
            option.style.backgroundColor = "#2ecc71"; // Green for correct answer
        } else {
            option.style.backgroundColor = "#e74c3c"; // Red for wrong answers
        }

        option.disabled = true;
    });

    // Move to the next question after a delay
    setTimeout(() => {
        currentQuestion++;

        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            alert(`Quiz completed! Your score is ${score}`);
        }
    }, 1500);
}

loadQuestion();
