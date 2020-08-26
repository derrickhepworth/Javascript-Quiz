//Environment Variables
var headerContentEl = document.querySelector("#header");
var pageContentEl = document.querySelector("#page-content");
var startQuizEl = document.querySelector("#start-quiz");
var startQuizDivEl = document.querySelector("#start-info");
var findAnswer = document.getElementsByClassName("question-input");
var userScore = 0;
var questionId = 0;
var questionText = "This is just the test text for the question YO.";
var startTime = 59;
var questionsArr = [
    {
        ask: "Is this my array test Question?",
        answerCorrect: "B",
        answerWrong: "Nah",
        questionId: 1
    },
    {
        ask: "Is this my second array Question?",
        answerCorrect: "I think you know it is",
        answerWrong:"I mean... I doubt it",
        questionId: 0
    }
];

//Functions
var clearStartEl = function () {
    startQuizEl.remove(startQuizDivEl);
};

var loadQuestion = function () {
    
};

var createQuestionEl = function () {
    
    //Question    
    var questionEl = document.createElement("div");
    questionEl.className = 'question-container';
    questionEl.id = 'question-container';
    questionEl.setAttribute("data-question-id", questionsArr[0].questionId);
    questionEl.innerHTML = "<h3 class='question'>" + questionsArr[0].ask + "</h3>";
    pageContentEl.appendChild(questionEl);
    console.log("Question #" + questionsArr[0].questionId);
    
    //Answers
    var formEl = document.createElement("form");
    formEl.className = 'question-box-blue';
    formEl.innerHTML = "<input type='radio' class ='question-input' id='A'  value ='A' name ='thisNameVar' checked><label for='A'>" + questionsArr[0].answerCorrect + "</label><br>"+
    "<input type='radio' class ='question-input' id='B'  value='B' name ='thisNameVar' checked><label for='B'>" + questionsArr[0].answerWrong + "</label><br>"+
    "<input type='radio' class ='question-input' id='C' value='C' name ='thisNameVar' checked><label for='C'>" + questionsArr[0].answerWrong + "</label><br>"+
    "<input type='radio' class ='question-input' id='D' value='D' name ='thisNameVar' checked><label for='D'>" + questionsArr[0].answerWrong+ "</label><br>"; 
    questionEl.appendChild(formEl);
    
    //Submit Button
    var submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.type ="submit";
    submitButton.value = "Submit";
    formEl.appendChild(submitButton);
    // console.log(questionEl);
    // console.dir(questionEl);

    

    
    return questionEl;
    
};

var submitButtonHandler = function (event) {
    event.preventDefault();
    // console.log(findAnswer);
    
    var checkedOrNot = document.getElementsByName("thisNameVar");
    // console.log(checkedOrNot);
    checkedOrNot.forEach( radio =>{
        if(radio.checked){
            // console.log("You Chose:", radio.value);
            var userAnswer = radio.value;
            // console.log(userAnswer);
            if (userAnswer === questionsArr[0].answerCorrect){
                userScore++;
                console.log("You chose: " +userAnswer, "- Correct", "Score = " + userScore);
            }else {
                console.log("You chose: " +userAnswer, "- Incorrect", "-3 Seconds", "Score = " + userScore);
                startTime --;
                startTime --;
                startTime --;
            }
        }
    });

    
};

var getUserAnswer = function (event){
    console.log(event.target);
};


var createTimerEl = function () {
    
    var timerEl = document.createElement("h1");
    timerEl.id = "timer-clock";
    timerEl.innerText = "1:00";
    headerContentEl.appendChild(timerEl);
    
    timer();
    
};

var timer = function () {
    console.log("Timer Started")
    
    var countdown = function () {
        secondMarker = startTime--;
        if (secondMarker === -1) {
            stopTimer();
        } else {
            headerContentEl.querySelector("#timer-clock").innerText = ":" + secondMarker;
        }
    };
    
    var stopTimer = function () {
        clearInterval(timerStart);
        console.log("Timer Stopped");
    };
    
    var timerStart = setInterval(countdown, 1000);
    // setTimeout(stopTimer, 61000);
};

//Start Button
var startButtonHandler = function () {
    
    clearStartEl();
    createQuestionEl();
    createTimerEl();
};


//Event Listeners
startQuizDivEl.addEventListener("click", startButtonHandler);
pageContentEl.addEventListener("submit", submitButtonHandler);
