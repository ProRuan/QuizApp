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
        'answer': 'Antwort'
    },
    {
        'question': 'Frage',
        'answer1': 'Antwort1',
        'answer2': 'Antwort2',
        'answer3': 'Antwort3',
        'answer4': 'Antwort4',
        'answer': 'Antwort'
    },
    {
        'question': 'Frage',
        'answer1': 'Antwort1',
        'answer2': 'Antwort2',
        'answer3': 'Antwort3',
        'answer4': 'Antwort4',
        'answer': 'Antwort'
    },
    {
        'question': 'Frage',
        'answer1': 'Antwort1',
        'answer2': 'Antwort2',
        'answer3': 'Antwort3',
        'answer4': 'Antwort4',
        'answer': 'Antwort'
    },
    {
        'question': 'Frage',
        'answer1': 'Antwort1',
        'answer2': 'Antwort2',
        'answer3': 'Antwort3',
        'answer4': 'Antwort4',
        'answer': 'Antwort'
    },
    {
        'question': 'Frage',
        'answer1': 'Antwort1',
        'answer2': 'Antwort2',
        'answer3': 'Antwort3',
        'answer4': 'Antwort4',
        'answer': 'Antwort'
    }
];


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer1'];
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];
}


// Bitte Funktion kommentieren!!!

function answer(selection) {
    let question = questions[currentQuestion];
    console.log('selected answer is', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectiedQuestionNumber is', selectedQuestionNumber);
    console.log('Current question is', question['answer']);

    if (selectedQuestionNumber == question['answer']) {
        console.log('Richtige Antwort!');
    } else {
        console.log('Falsche Antwort');
    }
}