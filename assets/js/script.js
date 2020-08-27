//Environment Variables
var headerContentEl = document.querySelector("#header");
var pageContentEl = document.querySelector("#page-content");
var startQuizEl = document.querySelector("#start-quiz");
var startQuizDivEl = document.querySelector("#start-info");
var findAnswer = document.getElementsByClassName("question-input");
var answerDiv = document.querySelector("#question-container");
var userScore = 0;
var startTime = 59;
var questionNumber = 1;
var questionsArr = [
    {
        ask: "Is this my array test Question?",
        answerA: "It ain't me",
        answerB: "I am the correct one",
        answerC: "Could be me... but it's not",
        answerD: "No way",
        answerCorrect: "B",
        questionId: 1
    },
    {
        ask: "2 Question?",
        answerA: "2A",
        answerB: "2B",
        answerC: "2C",
        answerD: "2D",
        answerCorrect: "A",
        questionId: 2
    }, {
        ask: "9 Question?",
        answerA: "2A",
        answerB: "2B",
        answerC: "2C",
        answerD: "2D",
        answerCorrect: "D",
        questionId: 2
    }
];
var qI = 0;
var scoreArr = [];

//Functions
var clearStartEl = function () {
    startQuizEl.remove(startQuizDivEl);
};

var clearAnswerEl = function () {
    pageContentEl.removeChild(pageContentEl.childNodes[1]);
};

var createQuestionEl = function () {

    //Question    
    var questionEl = document.createElement("div");
    questionEl.className = 'question-container question-box-green';
    questionEl.id = 'question-container';
    questionEl.setAttribute("data-question-id", questionsArr[qI].questionId);
    questionEl.innerHTML = "<h3 class='question'>" + questionsArr[qI].ask + "</h3>";
    pageContentEl.appendChild(questionEl);
    // console.log("Question #" + questionsArr[qI].questionId);

    //Answers
    var formEl = document.createElement("form");
    formEl.id = 'endCheck';
    formEl.className = 'question-box-blue';
    formEl.innerHTML = "<input type='radio' class ='question-input' id='A'  value ='A' name ='thisNameVar' checked><label for='A'>" + questionsArr[qI].answerA + "</label><br>" +
        "<input type='radio' class ='question-input' id='B'  value='B' name ='thisNameVar' checked><label for='B'>" + questionsArr[qI].answerB + "</label><br>" +
        "<input type='radio' class ='question-input' id='C' value='C' name ='thisNameVar' checked><label for='C'>" + questionsArr[qI].answerC + "</label><br>" +
        "<input type='radio' class ='question-input' id='D' value='D' name ='thisNameVar' checked><label for='D'>" + questionsArr[qI].answerD + "</label><br>";
    questionEl.appendChild(formEl);

    //Submit Button
    var submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.type = "submit";
    submitButton.value = "Submit";
    formEl.appendChild(submitButton);
    return questionEl;

};

var createScoreEl = function () {
    var scoreBoxEl = document.createElement("div");
    scoreBoxEl.className = "score-box";
    scoreBoxEl.id = "score-box";
    pageContentEl.appendChild(scoreBoxEl);
    var againEl = document.querySelector("#score-box");
    pageContentEl.addEventListener("click", againButtonHandler);


    var scoreBannerEl = document.createElement("h2")
    scoreBannerEl.className = "score-banner";
    scoreBoxEl.innerText = "High Scores";
    scoreBoxEl.appendChild(scoreBannerEl);

    var buttonDivEl = document.createElement("div");
    buttonDivEl.innerHTML = ("<button>Take Quiz Again</button>");
    pageContentEl.appendChild(buttonDivEl);

    for (var i = 0; i < scoreArr.length; i++) {
        var scoreEl = document.createElement("ol");
        scoreEl.innerText = ((i + 1) + ". " + scoreArr[i].initials + "......." + scoreArr[i].score);
        scoreBoxEl.appendChild(scoreEl);
    };
};

var saveScore = function () {
    console.log("save happened", scoreArr);
    localStorage.setItem("scoreArr", JSON.stringify(scoreArr));
};

var sortScore = function (a, b) {
    console.log("sort is happening");
    if (a.score < b.score) {
        return 1;
    } else if (a.score > b.score) {
        return -1;
    } else {
        return 0;
    }
};

var loadScore = function () {
    var gotScores = localStorage.getItem("scoreArr", scoreArr);
    scoreArr = JSON.parse(gotScores);
    console.log("gotScores", gotScores);

    if (!gotScores) {
        var firstScoreArr = [
            {
                initials: "SAD",
                score: 0
            }
        ];

        scoreArr = firstScoreArr;
        saveScore();
    } else {

        // console.log(scoreArr.sort(sortScore));
        sortedScores = scoreArr.sort(sortScore);
        scoreArr = sortedScores;
        console.log("sorted and changed", scoreArr);
        // console.log(scoreArr);
        return scoreArr;
    }
};



var scoreDisplay = function () {
    // console.log("loaded", scoreArr);
    var qInitials = prompt("Game over! Enter your initials. No more than 3 charcters. For example 'DMH'.").toUpperCase();
    if (!qInitials || qInitials.length > 3) {
        qInitials = prompt("Game over! Enter your initials. No more than 3 charcters. For example 'DMH'.").toUpperCase();
        scoreDisplay();
    };
    // console.log(qInitials);

    var scoreDataObj = {
        initials: qInitials,
        score: userScore
    };

    console.log("Object created", scoreDataObj);
    scoreArr.push(scoreDataObj);
    console.log("Array with push", scoreArr);
    sortedScores = scoreArr.sort(sortScore);
    scoreArr = sortedScores;
    console.log("array after push and sort", scoreArr);
    saveScore();
    createScoreEl();
};


var submitButtonHandler = function (event) {
    event.preventDefault();
    var checkedOrNot = document.getElementsByName("thisNameVar");
    // console.log(checkedOrNot);
    checkedOrNot.forEach(radio => {
        if (radio.checked) {
            var userAnswer = radio.value;
            if (userAnswer === questionsArr[qI].answerCorrect) {
                userScore++;
                // console.log("You chose: " + userAnswer, "- Correct", "Score = " + userScore);

            } else {
                // console.log("You chose: " + userAnswer, "- Incorrect", "-3 Seconds", "Score = " + userScore);
                startTime--;
                startTime--;
                startTime--;

            }
        }
    });


    qI++;
    questionNumber++;

    if (questionNumber > questionsArr.length) {
        clearAnswerEl();
        headerContentEl.querySelector("#timer-clock").innerText = "You answered all questions! Score: " + userScore;
        // clearInterval(timerStart);
        scoreDisplay();
    } else {
        clearAnswerEl();
        createQuestionEl();
    };


};



var createTimerEl = function () {

    var timerEl = document.createElement("h1");
    timerEl.id = "timer-clock";
    timerEl.innerText = "1:00";
    headerContentEl.appendChild(timerEl);

    timer();
};

var timer = function () {
    // console.log("Timer Started")

    var countdown = function () {
        secondMarker = startTime--;
        if (secondMarker <= - 1) {
            stopTimer();
        } else if (questionNumber > questionsArr.length) {
            clearInterval(timerStart);
        } else {
            headerContentEl.querySelector("#timer-clock").innerText = ":" + secondMarker;
        }
    };

    var stopTimer = function () {
        clearInterval(timerStart);
        console.log("Timer Stopped");
        headerContentEl.querySelector("#timer-clock").innerText = "You ran out of time! Score: " + userScore;
        clearAnswerEl();
        scoreDisplay();
    };

    var timerStart = setInterval(countdown, 1000);


};

//Start Button
var startButtonHandler = function () {

    clearStartEl();
    createQuestionEl();
    createTimerEl();
    loadScore();

};

var againButtonHandler = function () {
    location.reload();

};






//Event Listeners
startQuizDivEl.addEventListener("click", startButtonHandler);
pageContentEl.addEventListener("submit", submitButtonHandler);
