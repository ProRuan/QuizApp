let currentQuestion = 0;
let counterRightAnswers = 0;
let AUDIO_SUCCESS = new Audio('./audio/success.mp3');
let AUDIO_FAILURE = new Audio('./audio/failure.mp3');


// Create your own JSON-Array
// Check your Array with JSON Array Formatter and Validator

let questions = [
    {
        'question': 'Ist das meine erste Frage?',
        'answer1': 'Das ist Antwort 1.',
        'answer2': 'Das ist Antwort 2.',
        'answer3': 'Das ist Antwort 3.',
        'answer4': 'Das ist Antwort 4.',
        'answer': 3
    },
    {
        'question': 'Frage',
        'answer1': 'Antwort1',
        'answer2': 'Antwort2',
        'answer3': 'Antwort3',
        'answer4': 'Antwort4',
        'answer': 2
    },
    {
        'question': 'Frage',
        'answer1': 'Antwort1',
        'answer2': 'Antwort2',
        'answer3': 'Antwort3',
        'answer4': 'Antwort4',
        'answer': 4
    },
    {
        'question': 'Frage',
        'answer1': 'Antwort1',
        'answer2': 'Antwort2',
        'answer3': 'Antwort3',
        'answer4': 'Antwort4',
        'answer': 3
    },
    {
        'question': 'Frage',
        'answer1': 'Antwort1',
        'answer2': 'Antwort2',
        'answer3': 'Antwort3',
        'answer4': 'Antwort4',
        'answer': 1
    },
    {
        'question': 'Frage',
        'answer1': 'Antwort1',
        'answer2': 'Antwort2',
        'answer3': 'Antwort3',
        'answer4': 'Antwort4',
        'answer': 3
    },
    {
        'question': 'Frage',
        'answer1': 'Antwort1',
        'answer2': 'Antwort2',
        'answer3': 'Antwort3',
        'answer4': 'Antwort4',
        'answer': 4
    }
];


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {
    if (currentQuestion < questions.length) {
        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style.width = `${percent}%`;
        console.log('Fortschritt:', percent);

        let question = questions[currentQuestion];

        document.getElementById('question').innerHTML = question['question'];
        document.getElementById('answer1').innerHTML = question['answer1'];
        document.getElementById('answer2').innerHTML = question['answer2'];
        document.getElementById('answer3').innerHTML = question['answer3'];
        document.getElementById('answer4').innerHTML = question['answer4'];
        document.getElementById('current-question').innerHTML = currentQuestion + 1;
    } else {
        document.getElementById('end-screen').style.display = 'unset';
        document.getElementById('question-body').style.display = 'none';

        document.getElementById('header-img').src = './img/award.png';
        document.getElementById('right-answers').innerHTML = counterRightAnswers;
        document.getElementById('maximum-answers').innerHTML = questions.length;
    }

}


// Bitte Funktion kommentieren!!!
// Bitte Responsive machen --> 100 % des Bildschirms!

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer${question['answer']}`;

    if (selectedQuestionNumber == question['answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        counterRightAnswers++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAILURE.play();
    }
    document.getElementById('next-button').disabled = false;
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}


function resetAnswerButtons() {
    document.getElementById('answer1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer1').parentNode.classList.remove('bg-success');
    document.getElementById('answer2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer2').parentNode.classList.remove('bg-success');
    document.getElementById('answer3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer3').parentNode.classList.remove('bg-success');
    document.getElementById('answer4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer4').parentNode.classList.remove('bg-success');
}


function restartQuiz() {
    document.getElementById('header-img').src = './img/question-mark.jpg';
    currentQuestion = 0;
    counterRightAnswers = 0;
    init();
    document.getElementById('end-screen').style.display = 'none';
    document.getElementById('question-body').style.display = 'unset';
}