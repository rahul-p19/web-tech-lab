const quizData = [
    {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<hyperlink>"],
        answer: "<a>"
    },
    {
        question: "Which HTTP method is typically used to retrieve data from a server?",
        options: ["POST", "GET", "PUT", "DELETE"],
        answer: "GET"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const selectedOption = document.getElementById("selectedOption");

function loadQuestion() {

    const questionData = quizData[currentQuestionIndex];

    document.getElementById("question").textContent = questionData.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    questionData.options.forEach(option => {

        const button = document.createElement("button");
        button.textContent = option;
        button.className = "optionBtn";

        button.onclick = function () {
            checkAnswer(option);
            selectedOption.innerText = "Selected Answer: " + option;
        };

        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedOption) {

    if (selectedOption === quizData[currentQuestionIndex].answer) {
        score++;
    }
}

function nextQuestion() {

    currentQuestionIndex++;
    selectedOption.innerText = "";

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById("quizBox").style.display = "none";
        document.getElementById("result").textContent =
            "Quiz Finished! Your Score: " + score + "/" + quizData.length;
    }
}

// Load first question on page load
loadQuestion();
