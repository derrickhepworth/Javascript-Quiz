//Environment Variables
var pageContentEl = document.querySelector("#page-content");
var startQuizEl = document.querySelector("#start-quiz");
var startQuizDivEl = document.querySelector("#start-info");
var userScore = 0;
var questionId = 0;
var questionText = "This is just the test text for the question YO.";

//Functions

var clearStartEl = function () {
    startQuizEl.remove(startQuizDivEl);
};

var loadQuestion = function () {

};

var createQuestionEl = function () {
    console.log ("creatQuestionEl function called");
var questionEl = document.createElement("div");
questionEl.className = 'question-box';
questionEl.setAttribute("data-question-id", questionId);
questionEl.innerHTML = "<h3 class='question'>" + questionText + "</h3>";
pageContentEl.appendChild(questionEl);
console.log("questionId", questionId);

var answerEl = document.createElement("form");
answerEl.className = 'question-box';
answerEl.innerHTML = "<input type='radio' id='' class='' value='A' ><label for='A'>A-just getting it working.</label><br><input type='radio' id='' class='' value='B' ><label for='B'>B-Doing what I do.</label><br><input type='radio' id='' class='' value='C' ><label for='C'>C-It's test fodder.</label><br><input type='radio' id='' class='' value='D' ><label for='D'>D-WubbaLubbaDubDub.</label><br>"
questionEl.appendChild(answerEl);
};

//Start Button
var startButtonHandler = function () {
    console.log("click event");
    console.log("timer started");

    // Timer
    var gameTimer = function () {
        alert("Game Over. Your score is " + userScore + '. ');
    };
    setTimeout(gameTimer, 60000);

    // load html questions

    clearStartEl();
    createQuestionEl();


    // multiple choice answer form
    // load timer visual
};

//Event Listeners
startQuizEl.addEventListener("click", startButtonHandler);