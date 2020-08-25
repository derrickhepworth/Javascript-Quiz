//Environment Variables
var pageContentEl = document.querySelector("#page-content");
var startQuizEl = document.querySelector("#start-quiz");
var startQuizDivEl = document.querySelector("#start-info");
var userScore = 0;

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
questionEl.innerHTML = "<h3 class='question'> This is a test first question.</h3>";

pageContentEl.appendChild(questionEl);
};

//Start Button
var startButtonHandler = function () {
    console.log("click event");

    // Timer
    var gameTimer = function () {
        alert("Game Over. Your score is " + userScore + '. ');
        console.log("timer started");
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