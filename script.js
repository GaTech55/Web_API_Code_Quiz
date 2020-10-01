// console.log("Hello World");
//Variables//////////
var introContainer = document.getElementById("intro");
//later will use the quizContainer when hiding to show  the All Done page
var quizContainer = document.getElementById("quiz");
var startButton = document.getElementById("startBtn");
var questionVar = document.getElementById("question");
var optionsVar = document.getElementById("options");
var titleAllDone = document.getElementById("titleDone");
var finalScore = document.getElementById("finalScore");
var seconds = document.getElementById("countdown").textContent;
var navBar = document.getElementById("navBar");
//time variables add stages.length*15

//also add an empty variable for time
//add>> timerID=setinterval(clockTick,1000);<<<means we will perform this function ever second
//clockTick function if value the time-15
//clockTick function include a quizEnd
var totalTime = 75;
var wrongTime = 10;
//array of objects
var currentStage = 0;
var stages = [
  // NOTE: REMOVE PRETTIER TO SEE IF THAT FIXES THE EXTRA COMMA/box
  {
    questionKey: "Commonly used data types DO NOT include:",
    optionsKey: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answerKey: "3. alerts",
  },
  {
    questionKey:
      "The condition in an if / else statement is enclosed within ____.",
    optionsKey: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses",
      "4. square brackets",
    ],
    answerKey: "3. parentheses",
  },
  {
    questionKey: "Arrays in JavaScript can be used to store ____.",
    optionsKey: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answerKey: "4. all of the above",
  },
  {
    questionKey:
      "String values must be enclosed within ____ when being assigned to variables.",
    optionsKey: [
      "1. commas",
      "2. curly brackets",
      "3. quotes",
      "4. parentheses",
    ],
    answerKey: "3. quotes",
  },
  {
    questionKey:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    optionsKey: [
      "1. JavaScript",
      "2. terminal / bash",
      "3. for loops",
      "4. console.log",
    ],
    answerKey: "4. console.log",
  },
];

//Functions//////////
function showOptions(array, answer) {
  for (var i = 0; i < stages[currentStage].optionsKey.length; i++) {
    // Create element
    // for (var j = 0; j < 4; j++) {
    var button = document.createElement("button");
    var breakVar = document.createElement("br");
    // Add content
    button.setAttribute("class", "btn btn-info");
    button.textContent = array[i];
    button.setAttribute("data-value", answer);
    button.style.marginTop = "5px";
    //Append to an existing element
    optionsVar.append(button);
    optionsVar.append(breakVar);
    //NEED TO CREATE AN ELEMENT FOR BR
    console.log(button);
    // console.log(array);
  }
}

function showAllDone() {
  var titleVar = document.createElement("h1");
  var finalScoreVar = document.createElement("p");
  titleAllDone.setAttribute("class", "h1");
  titleAllDone.append("All done!");
  finalScore.append("Your final score is " + seconds + ".");
  navBar.style.display = "none";
}

//Event Listeners//////////
startButton.addEventListener("click", function () {
  introContainer.style.display = "none";
  var questionToDisplay = stages[currentStage].questionKey;
  var optionsToDisplay = stages[currentStage].optionsKey;
  var answerToDisplay = stages[currentStage].answerKey;
  // var seconds = document.getElementById("countdown").textContent;
  var countdown = setInterval(function () {
    seconds--;
    seconds == 1
      ? (document.getElementById("plural").textContent = "")
      : (document.getElementById("plural").textContent = "s");
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
  }, 1000);
  questionVar.setAttribute("class", "h1");
  questionVar.append(questionToDisplay);
  // showOptions();
  showOptions(optionsToDisplay, answerToDisplay);
});

optionsVar.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    var selectedOptions = event.target.getAttribute("data-value");
    console.log(selectedOptions);

    answer.textContent = "";
    var optionPicked = document.createElement("h3");
    optionPicked.textContent = selectedOptions;
    answer.append(optionPicked);

    //check to see if we are at the end of the array
    if (currentStage === stages.length - 1) {
      quizContainer.style.display = "none";
      showAllDone();
    } else {
      setTimeout(function () {
        currentStage++;
        answer.textContent = "";
        questionVar.textContent = "";
        optionsVar.textContent = "";
        var questionToDisplay = stages[currentStage].questionKey;
        var optionsToDisplay = stages[currentStage].optionsKey;
        var answerToDisplay = stages[currentStage].answerKey;
        questionVar.append(questionToDisplay);
        // showOptions();
        showOptions(optionsToDisplay, answerToDisplay);
        //create a new function to check the answer outside of here then here compare the option to the answer
      }, 1000);
    }
  }
});

// items left:
// // * convert answer into "Correct!" or "Wrong!". Need to give it a top gray border
// * add timer
// * remove 10 seconds time if answer if incorrect
// * end quiz if time runs out or quiz completed
// * if completed then capture time and provide that as score
