// console.log("Hello World");
var introContainer = document.getElementById("intro");
//later will use the quizContainer when hiding to show  the All Done page
var quizContainer = document.getElementById("quiz");
var startButton = document.getElementById("startBtn");
var questionVar = document.getElementById("question");
var choicesVar = document.getElementById("choices");

var quizObjects = {
  stages: [
    {
      questionKey: "Commonly used data types DO NOT include: ",
      choicesKey: ["strings", "booleans", "alerts", "numbers"],
    },
    {
      questionKey:
        "The condition in an if / else statement is enclosed within ____",
      choicesKey: [
        "quotes",
        "curly brackets",
        "parentheses",
        "square brackets",
      ],
    },
    {
      questionKey: "Arrays in JavaScript can be used to store ____",
      choicesKey: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above",
      ],
    },
    {
      questionKey:
        "String values must be enclosed within ____ when being assigned to variables",
      choicesKey: ["commas", "curly brackets", "quotes", "parentheses"],
    },
    {
      questionKey:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choicesKey: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    },
  ],
};

function showChoices() {
  var questionOne = "Commonly used data types DO NOT include:";
  var availableChoices = [
    "1. strings",
    "2. booleans",
    "3. alerts",
    "4. numbers",
  ];

  for (var i = 0; i < availableChoices.length; i++) {
    // console.log(availableChoices.length);
    // Create element
    var button = document.createElement("button");
    // Add content
    button.setAttribute("class", "btn btn-info");
    button.textContent = availableChoices[i];
    button.setAttribute("data-value", availableChoices[i]);
    //Append to an existing element
    choicesVar.append(button);
  }
  questionVar.setAttribute("class", "h1");
  questionVar.append(questionOne);
}

choicesVar.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    console.log("You clicked a button");
    var selectedChoice = event.target.getAttribute("data-value");
    console.log(selectedChoice);

    answer.textContent = "";
    var choiceGrade = document.createElement("h3");
    choiceGrade.textContent = selectedChoice;
    answer.append(choiceGrade);
  }
});
//go to 42 minute for second question setup

startButton.addEventListener("click", function () {
  introContainer.style.display = "none";
  showChoices();
});
