// console.log("Hello World");
//Variables//////////
var introContainer = document.getElementById("intro");
//later will use the quizContainer when hiding to show  the All Done page
var quizContainer = document.getElementById("quiz");
var startButton = document.getElementById("startBtn");
var questionVar = document.getElementById("question");
var optionsVar = document.getElementById("options");

var currentStage = 0;
var stages = [
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
function showOptions(array) {
  for (var i = 0; i < array.length; i++) {
    // Create element
    var button = document.createElement("button");
    // Add content
    button.setAttribute("class", "btn btn-info");
    button.textContent = array[i];
    button.setAttribute("data-value", array[i]);
    //Append to an existing element
    optionsVar.append(button);
  }
}

//Event Listeners//////////
startButton.addEventListener("click", function () {
  introContainer.style.display = "none";
  var questionToDisplay = stages[currentStage].questionKey;
  var optionsToDisplay = stages[currentStage].optionsKey;
  questionVar.setAttribute("class", "h1");
  questionVar.append(questionToDisplay);
  showOptions(optionsToDisplay);
});

optionsVar.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    var selectedOptions = event.target.getAttribute("data-value");
    console.log(selectedOptions);

    answer.textContent = "";
    var optionGrade = document.createElement("h3");
    optionGrade.textContent = selectedOptions;
    answer.append(optionGrade);

    //check to see if we are at the end of the array
    if (currentStage === stages.length - 1) {
      quizContainer.style.display = "none";
    } else {
      setTimeout(function () {
        currentStage++;
        answer.textContent = "";
        questionVar.textContent = "";
        optionsVar.textContent = "";
        var questionToDisplay = stages[currentStage].questionKey;
        var optionsToDisplay = stages[currentStage].optionsKey;
        questionVar.append(questionToDisplay);
        showOptions(optionsToDisplay);
      }, 1000);
    }
  }
});

//optimizing starts at 50 minutes

// items left:
// // * convert answer into "Correct!" or "Wrong!"
// * add timer
// * remove 10 seconds time if answer if incorrect
// * end quiz if time runs out or quiz completed
// * if completed then capture time and provide that as score
