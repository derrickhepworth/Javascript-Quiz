//Environment Variables
var pageContentEl = document.querySelector("#page-content");
var startQuizEl = pageContentEl.querySelector("#start-quiz");
var userScore = 0;

//Functions

var clearStartEl = function () {
    pageContentEl.remove(startQuizEl);
};

var loadQuestion = function () {

};

//Start Button
var startButtonHandler = function () {
    console.log("click event");

    // Timer
    var gameTimer = function () {
        alert("Game Over. Your score is " + userScore + '. ');
    };
    setTimeout(gameTimer, 60000);

    // load html questions

    clearStartEl();


    // multiple choice answer form
    // load timer visual
};

//Event Listeners
pageContentEl.addEventListener("click", startButtonHandler);