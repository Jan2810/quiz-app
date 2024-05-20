let questions = [
    {
        "question": "Wieviele Bundesstaaten hat die USA?",
        "answer_1": "39",
        "answer_2": "44",
        "answer_3": "53",
        "answer_4": "50",
        "right_answer": 4,
    },
    {
        "question": "Wieviele Einwohner hat Armenien?",
        "answer_1": "2 780 000",
        "answer_2": "276 000",
        "answer_3": "10 000 000",
        "answer_4": "6 230 000",
        "right_answer": 1,
    },
    {
        "question": "In welchem Land werden die meisten Sprachen und Dialekte gesprochen?",
        "answer_1": "China",
        "answer_2": "Papua-Neuguinea",
        "answer_3": "Mauretanien",
        "answer_4": "Sri Lanka",
        "right_answer": 2,
    },
    {
        "question": "Welches gilt als das japanische Nationalgericht?",
        "answer_1": "Sushi",
        "answer_2": "Peking-Ente",
        "answer_3": "Miso Suppe",
        "answer_4": "Pizza",
        "right_answer": 3,
    },
    {
        "question": "Welche ist die offizielle Amtssprache Tasmaniens",
        "answer_1": "Tasmanisch",
        "answer_2": "Indonesisch",
        "answer_3": "Englisch",
        "answer_4": "Französisch",
        "right_answer": 3,
    },
    {
        "question": "Wann wurde der erste Ferarri gebaut?",
        "answer_1": "1945",
        "answer_2": "1953",
        "answer_3": "1971",
        "answer_4": "1947",
        "right_answer": 4,
    },
    {
        "question": "Welche ist die Hauptstadt von Madagaskar?",
        "answer_1": "Antananarivo",
        "answer_2": "Lagos",
        "answer_3": "Kingston",
        "answer_4": "Manakara",
        "right_answer": 1,
    },
];

let currentQuestion = 0;

function init() {
    document.getElementById('question-amount').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById('endscreen').style = '';
        document.getElementById('question-body').style = 'display: none';
    } else {

        let question = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('question-text').innerHTML = question['question'];
        document.getElementById('answer-1').innerHTML = question['answer_1'];
        document.getElementById('answer-2').innerHTML = question['answer_2'];
        document.getElementById('answer-3').innerHTML = question['answer_3'];
        document.getElementById('answer-4').innerHTML = question['answer_4'];
    }

}

function answerQuestion(selection) {
    let question = questions[currentQuestion];
    let selectedAnswerNumber = selection.slice(-1);
    let idOfRightAnswer = `answer-${question['right_answer']}`;

    if (selectedAnswerNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    resetAnswerButtons();
    document.getElementById('next-button').disabled = true;

    showQuestion();
}

function resetAnswerButtons() {
    for (i = 1; i < 5; i++) {
        document.getElementById(`answer-${i}`).parentNode.classList.remove('bg-danger', 'bg-success');
    }
}
