const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];


let points = 0;
let actualQuestion = 0;

const questions = [

    {

        "question": "Quem foi o pai da economia moderna ?",
        "answers": [{
                "answer": "Adão de Adão e eva",
                "correct": "false"


            },
            {
                "answer": "Adam Smith",
                "correct": "true"


            },
            {
                "answer": "Abraham Lincoln",
                "correct": "false"


            },
            {
                "answer": "Milton Friedman",
                "correct": "false"


            },


        ]


    },
    {
        "question": "Quem foi o pai da matemática ?",
        "answers": [{
                "answer": "Pitágoras de Samos",
                "correct": "true"


            },
            {
                "answer": "Isaac Newton",
                "correct": "false"


            },
            {
                "answer": "Arquimedes",
                "correct": "false"


            },
            {
                "answer": "Rene Descartes",
                "correct": "false"


            },


        ]


    },
    {
        "question": "Em que ano aconteceu a grande depressão ?",
        "answers": [{
                "answer": "1845",
                "correct": "false"


            },
            {
                "answer": "1970",
                "correct": "false"


            },
            {
                "answer": "2008",
                "correct": "false"


            },
            {
                "answer": "1930",
                "correct": "true"


            },


        ]


    },
    {
        "question": " Qual o nome do ducentésimo quinquagésimo papa da historia do vaticano ?",
        "answers": [{
                "answer": "Clemente XIV,",
                "correct": "false"


            },
            {
                "answer": "Bento XIV",
                "correct": "false"


            },
            {
                "answer": "Pius VI",
                "correct": "true"


            },
            {
                "answer": "Bento XVI",
                "correct": "false"


            },


        ]


    },
    {
        "question": " O pai do padre é filho do meu pai, o que eu sou do pai do padre ?",
        "answers": [{
                "answer": "Filho",
                "correct": "false"


            },
            {
                "answer": "Pai",
                "correct": "false"


            },
            {
                "answer": "Neto",
                "correct": "false"


            },
            {
                "answer": "Irmão",
                "correct": "true"


            },


        ]


    },
    {
        "question": "Quem foi o pai da administração Científica ? ",
        "answers": [{
                "answer": "Frederick W. Taylor.",
                "correct": "false"


            },
            {
                "answer": "Henry Ford",
                "correct": "true"


            },
            {
                "answer": "weber",
                "correct": "false"


            },
            {
                "answer": "Karl Marx",
                "correct": "false"


            },


        ]


    },
    {
        "question": "Quem comandou a alemanha na segunda guerra mundial ? ",
        "answers": [{
                "answer": "Adolf Hitler",
                "correct": "true"


            },
            {
                "answer": "Albert Einstein",
                "correct": "false"


            },
            {
                "answer": "Johannes Gutenberg",
                "correct": "false"


            },
            {
                "answer": "Karl Marx",
                "correct": "false"


            },


        ]


    },
    {
        "question": "Quem foi o presidente responsavel pela construção de Brasilia  ? ",
        "answers": [{
                "answer": "João Goulart",
                "correct": "false"


            },
            {
                "answer": "Luis Inacio lula da Silva",
                "correct": "false"


            },
            {
                "answer": "Juscelino Kubitschek",
                "correct": "true"


            },
            {
                "answer": "Jânio Quadros",
                "correct": "false"


            },


        ]


    },
    {
        "question": "O que é Satyagraha ? ",
        "answers": [{
                "answer": "Filosofia pacifica ativista inventada pela Mahatma Gandhi",
                "correct": "true"


            },
            {
                "answer": "Filosofia violenta inventada pela Mahatma Gandhi",
                "correct": "false"


            },
            {
                "answer": "Mather Luther King  inventou essa filosofia para lutar contra a segregação racial",
                "correct": "false"


            },
            {
                "answer": "filosofia de vida inventada por Nelson Mandela para abolir o apartheid",
                "correct": "false"


            },


        ]


    },
    {
        "question": "Qual o povo que teorizou o fim do mundo no ano de 2012  ? ",
        "answers": [{
                "answer": "Astecas",
                "correct": "false"


            },
            {
                "answer": "Maias",
                "correct": "true"


            },
            {
                "answer": "Incas",
                "correct": "false"


            },
            {
                "answer": "Indigenas",
                "correct": "false"


            },


        ]


    }




]


function init() {
    createQuestion(0);

}


function createQuestion(i) {

    const oldButtons = answersBox.querySelectorAll("button");
    oldButtons.forEach(function (btn) {

        btn.remove();
    });

    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");


    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;


    questions[i].answers.forEach(function (answer, i) {

        const answerTemplate = document.querySelector(".answer-template").cloneNode(true);
        const letterBtn = answerTemplate.querySelector(".btn-letter");
        const answerText = answerTemplate.querySelector(".question-answer");

        letterBtn.textContent = letters[i];
        answerText.textContent = answer["answer"];
        answerTemplate.setAttribute("correct-answers", answer['correct']);

        answerTemplate.classList.remove('hide');
        answerTemplate.classList.remove('answer-template');


        answersBox.appendChild(answerTemplate);

        answerTemplate.addEventListener('click', function () {
            checkAnswer(this);
        });


    });

    actualQuestion++;


}

function checkAnswer(btn) {

    const buttons = answersBox.querySelectorAll('button');


    buttons.forEach(function (button) {
        if (button.getAttribute('correct-answers') == 'true') {
            button.classList.add('correct-answers');


            if (btn === button) {
                points++;


            }

        } else {

            button.classList.add('wrong-answer');


        }




    });


    nextQuestion()



}

function nextQuestion() {

    setTimeout(function () {
        if (actualQuestion >= questions.length) {

            showSuccessMessage();
            return;
        }

        createQuestion(actualQuestion);

    }, 2500);


}

function showSuccessMessage() {

    hideOrShowQuizz();


    const score = ((points / questions.length) * 100).toFixed(2);

    const displayScore = document.querySelector("#display-score span");
    displayScore.textContent = score.toString();

    const correctAnswers = document.querySelector("#correct-answers");


    correctAnswers.textContent = points;


    const totalQuestions = document.querySelector('#question-qty');
    totalQuestions.textContent = questions.length;
}

function hideOrShowQuizz() {

    quizzContainer.classList.toggle('hide');
    scoreContainer.classList.toggle('hide');
}


const restartBtn = document.querySelector('#restart');

restartBtn.addEventListener('click', function () {

    actualQuestion = 0;
    points = 0;
    hideOrShowQuizz();
    init();

});



init();
