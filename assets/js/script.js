

var questionsArr = [
    {
        ask: "Which of the following is not a valid data type?",
        answerA: "Boolean",
        answerB: "Number",
        answerC: "String",
        answerD: "All of the above are valid.",
        answerCorrect: "D",
        questionId: 1
    },
    {
        ask: "Which of the keywords is not a binding in Javascript?",
        answerA: "const",
        answerB: "let",
        answerC: "means",
        answerD: "var",
        answerCorrect: "C",
        questionId: 2
    }, {
        ask: "What does the -- operator do?",
        answerA: "Decrement",
        answerB: "Increment",
        answerC: "Multiply",
        answerD: "Subtract",
        answerCorrect: "A",
        questionId: 3
    }, {
        ask: "How many times will 'for (var i =0; i <12; i++)' loop?",
        answerA: "12",
        answerB: "11",
        answerC: "0",
        answerD: "infinite",
        answerCorrect: "A",
        questionId: 4
    }, {
        ask: "What does the % operator do?",
        answerA: "Decrement",
        answerB: "Divide",
        answerC: "Multiply",
        answerD: "Division Remainder",
        answerCorrect: "D",
        questionId: 5
    }, {
        ask: "For console.log( 1 + '1' ); what will be displayed in the console?",
        answerA: "2",
        answerB: "11",
        answerC: "1 + '1'",
        answerD: "undefined",
        answerCorrect: "B",
        questionId: 6
    }, {
        ask: "What does the logical operator ||  mean?",
        answerA: "and",
        answerB: "and/or",
        answerC: "or",
        answerD: "if",
        answerCorrect: "C",
        questionId: 7
    }, {
        ask: "Which binding will propogate CONST or VAR?",
        answerA: "CONST",
        answerB: "They both will",
        answerC: "Neither will",
        answerD: "VAR",
        answerCorrect: "D",
        questionId: 8
    }, {
        ask: "Which of the follwing is in camel case notation?",
        answerA: "this-One",
        answerB: "this_One",
        answerC: "thisOne",
        answerD: "this.One",
        answerCorrect: "C",
        questionId: 9
    }, {
        ask: "In the following function which is a parameter?  'function myFunction (a,b){math.floor(a-b);};'",
        answerA: "math",
        answerB: "b",
        answerC: "floor",
        answerD: "(a-b)",
        answerCorrect: "B",
        questionId: 10
    }, {
        ask: "Which type of value does 'if(!myVar){};' check for?",
        answerA: "All types",
        answerB: "Number",
        answerC: "Boolean",
        answerD: "The type of data has nothing to do with this.",
        answerCorrect: "C",
        questionId: 11
    }, {
        ask: "What is another name for Javascript?",
        answerA: "Java",
        answerB: "ECMAScript",
        answerC: "Netscape",
        answerD: "Java++",
        answerCorrect: "B",
        questionId: 12
    }, {
        ask: "Which operator is a true equality check?",
        answerA: "===",
        answerB: "==",
        answerC: "=",
        answerD: "!=",
        answerCorrect: "A",
        questionId: 13
    },  {
        ask: "Which is not a type of loop?",
        answerA: "for",
        answerB: "while",
        answerC: "do...while",
        answerD: "All of the above are loops",
        answerCorrect: "D",
        questionId: 14
    }, {
        ask: "Which of the following is not an event that can be listened for?",
        answerA: "click",
        answerB: "keyup",
        answerC: "volumeup",
        answerD: "submit",
        answerCorrect: "C",
        questionId: 15
    }
];

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
    questionEl.className = 'question-container';
    questionEl.id = 'question-container';
    questionEl.setAttribute("data-question-id", questionsArr[qI].questionId);
    questionEl.innerHTML = "<h3 class='question'>" + questionsArr[qI].ask + "</h3>";
    pageContentEl.appendChild(questionEl);
    // console.log("Question #" + questionsArr[qI].questionId);

    //Answers
    var formEl = document.createElement("form");
    formEl.id = 'endCheck';
    formEl.className = 'answer-box';
    formEl.innerHTML = "<input type='radio' class ='question-radio' id='A'  value ='A' name ='thisNameVar' checked><label class='question-content' for='A'>A - " + questionsArr[qI].answerA + "</label><br>" +
        "<input type='radio' class ='question-radio' id='B'  value='B' name ='thisNameVar' checked><label class='question-content' for='B'>B - " + questionsArr[qI].answerB + "</label><br>" +
        "<input type='radio' class ='question-radio' id='C' value='C' name ='thisNameVar' checked><label class='question-content' for='C'>C - " + questionsArr[qI].answerC + "</label><br>" +
        "<input type='radio' class ='question-radio' id='D' value='D' name ='thisNameVar' checked><label class='question-content' for='D'>D - " + questionsArr[qI].answerD + "</label><br>";
    questionEl.appendChild(formEl);

    

    //Submit Button
    var submitButtonDivEl= document.createElement("div");
    submitButtonDivEl.className = "btn-container";
    formEl.appendChild(submitButtonDivEl);

    var submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.type = "submit";
    submitButton.value = "Submit";
    submitButtonDivEl.appendChild(submitButton);
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
    scoreBannerEl.innerText = "High Scores";
    scoreBoxEl.appendChild(scoreBannerEl);

    var buttonDivEl = document.createElement("div");
    buttonDivEl.id = "refresh-btn";
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
    var checkInitialsLength = function () {

        if (!qInitials || qInitials.length > 3) {
            qInitials = prompt("Please enter 1-3 initials.");
            checkInitialsLength();
        };
    };
    var qInitials = prompt("Game over! Enter your initials. For example 'DMH'.");
    checkInitialsLength();
    qInitials = qInitials.toUpperCase();

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
    return qInitials;
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

            } else {
                startTime--;
                startTime--;
                startTime--;
                headerContentEl.querySelector("#timer-clock").setAttribute("style", "color: red;");
                headerContentEl.querySelector("#timer-clock").innerText = ":" + (secondMarker-1) + "(-3)";
            }
        }
    });


    qI++;
    questionNumber++;

    if (questionNumber > questionsArr.length) {
        clearAnswerEl();
        headerContentEl.querySelector("#timer-clock").innerText =  " You answered all questions! Score: " + userScore;
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
            headerContentEl.querySelector("#timer-clock").removeAttribute("style");
            headerContentEl.querySelector("#timer-clock").setAttribute("style", "color: navy;");


        } else if (questionNumber > questionsArr.length) {
            clearInterval(timerStart);
            headerContentEl.querySelector("#timer-clock").removeAttribute("style");
            headerContentEl.querySelector("#timer-clock").setAttribute("style", "color: navy;");


        } else {
            headerContentEl.querySelector("#timer-clock").innerText = ":" + secondMarker;
            if (secondMarker < 11){
                 headerContentEl.querySelector("#timer-clock").setAttribute("style", "color: red;");
                 headerContentEl.querySelector("#timer-clock").innerText = ":" + secondMarker;

            } else {
                headerContentEl.querySelector("#timer-clock").removeAttribute("style");
                headerContentEl.querySelector("#timer-clock").innerText = ":" + secondMarker;
            };
        };

    };

    var stopTimer = function () {
        clearInterval(timerStart);
        console.log("Timer Stopped");
        headerContentEl.querySelector("#timer-clock").innerText =  "You ran out of time! Score: " + userScore;
        clearAnswerEl();
        scoreDisplay();
    };

    //BLOCKED OUT FOR STYLING NO RESET
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
