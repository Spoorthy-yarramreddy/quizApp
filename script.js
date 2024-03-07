const quizData =[
    {
        question: "What is your name?",
        a: 'Spoorthy',
        b: 'John',
        c: 'Sam',
        d: 'Geremy',
        answer: 'a'
    },
    {
        question: "What is your fav language?",
        a: 'Java',
        b: 'Python',
        c: 'JS',
        d: 'C++',
        answer: 'a'
    },
    {
        question: "What is president  of US?",
        a: 'Trump',
        b: 'Biden',
        c: 'Obama',
        d: 'Bush',
        answer: 'a'
    },
    {
        question: "What does HTMl stands for?",
        a: 'HyperText Language',
        b: 'Hypertext Markup Language',
        c: 'StyleSheet',
        d: 'Application Program',
        answer: 'b'
    },
    {
        question: "What year js launched?",
        a: '1996',
        b: '1993',
        c: '2000',
        d: 'none of the above',
        answer: 'd'
    }
]

const results=document.querySelectorAll(".result");
const quiz= document.getElementById("quiz");
const questionEl=document.getElementById("question");
const a_text= document.getElementById("a_text");
const b_text= document.getElementById("b_text");
const c_text= document.getElementById("c_text");
const d_text= document.getElementById("d_text");
const submitBtn=document.getElementById("submit");
let currentQuestion=0;
const result=undefined;
let score=0;
loadQuiz();
let resultEl=undefined;
function loadQuiz(){
    deselectAnswers();
    const currentQuestionData=quizData[currentQuestion];
    questionEl.innerText=currentQuestionData.question;
    a_text.innerText=currentQuestionData.a;
    b_text.innerText=currentQuestionData.b;
    c_text.innerText=currentQuestionData.c;
    d_text.innerText=currentQuestionData.d;
    
}
function getSelected(){
    
    let resultEl=undefined;
    results.forEach((result) => {
       if(result.checked)
        resultEl=result.id;
    });
    return resultEl;
}

function deselectAnswers(){
    results.forEach((result) => {
       result.checked=false;
     });
 }


submitBtn.addEventListener("click", () => {
  
   const resultEl= getSelected();
   if(resultEl){
   if(resultEl===quizData[currentQuestion].answer){
       score++;
   }
    currentQuestion++;
    if(currentQuestion<quizData.length){
        loadQuiz();
    }
    else{
       quiz.innerHTML=`<h2>You answered ${score}/${quizData.length} questions correctly.</h2> <button onclick="location.reload()"> reload </button>` ;
    }
  
   }
   
});
