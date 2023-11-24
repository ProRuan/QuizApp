let currentQuestion = 0;


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
        let question = questions[currentQuestion];

    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer1'];
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];
    document.getElementById('current-question').innerHTML = currentQuestion + 1;
    } else {
        // show end screen
    }
    
}


// Bitte Funktion kommentieren!!!

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer${question['answer']}`;

    if (selectedQuestionNumber == question['answer']) {
        console.log('Richtige Antwort!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
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