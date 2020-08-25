//Environment Variables
var headerContentEl = document.querySelector("#header");
var pageContentEl = document.querySelector("#page-content");
var startQuizEl = document.querySelector("#start-quiz");
var startQuizDivEl = document.querySelector("#start-info");
var userScore = 0;
var questionId = 0;
var questionText = "This is just the test text for the question YO.";
var startTime = 60;

//Functions

var clearStartEl = function () {
    startQuizEl.remove(startQuizDivEl);
};

var loadQuestion = function () {

};

var createQuestionEl = function () {

    //Question div with text    
    var questionEl = document.createElement("div");
    questionEl.className = 'question-box';
    questionEl.setAttribute("data-question-id", questionId);
    questionEl.innerHTML = "<h3 class='question'>" + questionText + "</h3>";
    pageContentEl.appendChild(questionEl);
    console.log("questionId", questionId);

    //answer div with radio options within Question Div
    var answerEl = document.createElement("form");
    answerEl.className = 'question-box';
    answerEl.innerHTML = "<input type='radio' id='' class='' value='A' ><label for='A'>A-just getting it working.</label><br><input type='radio' id='' class='' value='B' ><label for='B'>B-Doing what I do.</label><br><input type='radio' id='' class='' value='C' ><label for='C'>C-It's test fodder.</label><br><input type='radio' id='' class='' value='D' ><label for='D'>D-WubbaLubbaDubDub.</label><br>"
    questionEl.appendChild(answerEl);

};

var createTimerEl = function () {
    var timerEl = document.createElement("h1");
    timerEl.id = "timer-clock";
    // timerEl.innerText = ":" + secondDec;
    headerContentEl.appendChild(timerEl);

    var oneSecond = function () {
        secondDec = startTime--;
        timerEl.innerText= ":" + secondDec ;
    };
    
    setInterval(oneSecond, 1000);
};

//Start Button
var startButtonHandler = function () {
    console.log("timer started");
    createTimerEl();

    // Timer
    var gameTimer = function () {
        // alert("Game Over. Your score is " + userScore + '. ');
        console.log("timer ended");
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