const quizData = [
    {
        question: 'what is the best course? rsrs',
        a: 'computer science',
        b: 'software engineer',
        c: 'information systems',
        d: 'analysis and systems development',
        correct: 'c'
    }, {
        question: 'what is the best language 2021?',
        a: 'Java',
        b: 'c++',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    }, {
        question: 'what president of Brasil?',
        a: 'Donald Trump',
        b: 'Bolsonaro',
        c: 'Paulo Silva',
        d: 'Ramon',
        correct: 'b'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading style sheet',
        c: 'Jason Object Notaion',
        d: 'Heiport Call Center',
        correct: 'a'
    }, {
        question: 'when was cs: go released?',
        a: '2011',
        b: '2010',
        c: '2012',
        d: '2013',
        correct: 'c'
    }
];

const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText =  currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answersEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
    
}

function deselectAnswers() {

    answersEls.forEach(answerEl => {
        answerEl.checked = false;
    });

}

submitBtn.addEventListener('click', () => {
    
    const answer = getSelected();
    
    console.log(answer);

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = 
            `
            <h2> You answered correctly at ${score}/${quizData.length} questions.</h2> <button onClick="location.reload()">Play Again</button>
            `
        }
    }

})