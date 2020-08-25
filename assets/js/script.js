//Environment Variables
var headerContentEl = document.querySelector("#header");
var pageContentEl = document.querySelector("#page-content");
var startQuizEl = document.querySelector("#start-quiz");
var startQuizDivEl = document.querySelector("#start-info");
var userScore = 0;
var questionId = 0;
var questionText = "This is just the test text for the question YO.";
var startTime = 59;
var questionsArr = [
    {
        ask: "Is this my array test Question?",
        answerCorrect: "You are right",
        answerWrong: "Nah",
        questionId: 1
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
    questionEl.className = 'question-box-red';
    questionEl.id = 'question-container';
    questionEl.setAttribute("data-question-id", questionsArr[0].questionId);
    questionEl.innerHTML = "<h3 class='question'>" + questionsArr[0].ask + "</h3>";
    pageContentEl.appendChild(questionEl);
    console.log("Question #" + questionsArr[0].questionId);
    
    //Answers
    var answerEl = document.createElement("form");
    answerEl.className = 'question-box-blue';
    answerEl.innerHTML = "<input type='radio' class ='question-box-green' id='A' value ='' name ='thisNameVar'><label for='A'>" + questionsArr[0].answerCorrect + "</label><br>"+
    "<input type='radio' class ='question-box-yellow' id='B' value ='' name ='thisNameVar'><label for='B'>" + questionsArr[0].answerWrong + "</label><br>"+
    "<input type='radio' class ='question-box-purple' id='C' value ='' name ='thisNameVar'><label for='C'>" + questionsArr[0].answerWrong + "</label><br>"+
    "<input type='radio' class ='question-box-red' id='D' value ='' name ='thisNameVar'><label for='D'>" + questionsArr[0].answerWrong+ "</label><br>"; 
    questionEl.appendChild(answerEl);
    
    //Submit Button
    var submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.type ="submit";
    submitButton.value = "Submit";
    questionEl.appendChild(submitButton);
    console.log(questionEl);
    console.dir(questionEl);

   var findQuestionEl = pageContentEl.querySelector("#question-container");

  return questionEl;

};

var submitButtonHandler = function (event) {

    console.log("Submit Button Handled!");
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
startQuizEl.addEventListener("click", startButtonHandler);
pageContentEl.addEventListener("submit", submitButtonHandler);