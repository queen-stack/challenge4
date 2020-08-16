// ======== Set up top-of-page elements ========
var body = document.body;

var topHdrEl = document.createElement('div');
var topHdrScoresEl = document.createElement('span');
var topHdrCurrTimeEl = document.createElement('span');

var mainEl = document.createElement('main');
mainEl.setAttribute('id', 'main-element');

topHdrScoresEl.textContent = 'View Scores';
topHdrCurrTimeEl.textContent = 'Time: ';

topHdrEl.setAttribute('style', 'margin:auto; width:100%;');
topHdrScoresEl.setAttribute('style', 'margin:auto; float:left;');
topHdrCurrTimeEl.setAttribute('style', 'margin:auto; float:right;');

body.appendChild(topHdrEl);
topHdrEl.appendChild(topHdrScoresEl);
topHdrEl.appendChild(topHdrCurrTimeEl);
body.appendChild(mainEl);

topHdrScoresEl.addEventListener('click', function() { endQuiz(createHighScoresPage); });

// ======== Set up Start page elements ========

var startH1El = document.createElement('h1');
var startH3El = document.createElement('h2');
var startBtnDiv = document.createElement('div');
var startBtn = document.createElement('button')

// Set the text contents of the Start page elements
startH1El.textContent = 'Coding Quiz Challenge';
startH3El.textContent = 'Try to answer the following code-related questions within the time limit.  Incorrect answers will penalize your score time by ten seconds.';
startBtn.textContent = 'Start Quiz';

// Style the start page elements
startH1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
startH3El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
startBtnDiv.setAttribute('style','margin:auto; width:50%; text-align:center;');
startBtn.setAttribute('style', 'margin:10px; text-align:center;');

startBtn.addEventListener("click", createQuizPage);

// ======== Set up Quiz Page elements ========

var quizQuestionTextEl = document.createElement('h2');
var quizAnswerListEl = document.createElement('ol');
var quizAnswer0El = document.createElement('li');
var quizAnswer1El = document.createElement('li');
var quizAnswer2El = document.createElement('li');
var quizAnswer3El = document.createElement('li');
var quizAnswerResult = document.createElement('div');

quizQuestionTextEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
quizAnswerListEl.setAttribute('style', 'margin:auto; width:50%; text-align:left;');
quizAnswer0El.setAttribute('class', 'quiz-answer-li');
quizAnswer1El.setAttribute('class', 'quiz-answer-li');
quizAnswer2El.setAttribute('class', 'quiz-answer-li');
quizAnswer3El.setAttribute('class', 'quiz-answer-li');

quizAnswerResult.setAttribute('style', 'color: #999999; margin:auto; width:50%; text-align:center;');

quizAnswer0El.addEventListener("click", function() {
   checkAnswer(0);
});
quizAnswer1El.addEventListener("click", function() {
   checkAnswer(1);
});
quizAnswer2El.addEventListener("click", function() {
   checkAnswer(2);
});
quizAnswer3El.addEventListener("click", function() {
   checkAnswer(3);
});

const TIMEOUT_INITIAL_VALUE = 20;  // how long the user has to take the quiz
var questionNumber;  // the question to show to the user
var correctAnswer;  // the answer number that is the correct choice
var timeoutInterval;  // how long to show the Correct/Wrong message
var timeLeft;  // Number of seconds allotted to finish the quiz.


// ======== Set up Timed Out Page elements ========

var timedOutH1El = document.createElement('h1');
var timedOutOkBtnDivEl = document.createElement('div');
var timedOutOkBtn = document.createElement('button')

timedOutH1El.textContent = 'You ran out of time.';
timedOutOkBtn.textContent = 'Ok';

timedOutH1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
timedOutOkBtnDivEl.setAttribute('style','margin:auto; width:50%; text-align:center;');
//timedOutOkBtn.setAttribute('style', 'margin:auto; text-align:center;');

timedOutOkBtn.addEventListener("click", createHighScoresPage);


// ======== Set up Winner Page elements ========

var winnerH1El = document.createElement('h1');
var winnerH3El = document.createElement('h3');
var winnerForm = document.createElement('form');
var winnerFormDiv = document.createElement('div');
var winnerFormLabel = document.createElement('label');
var winnerFormInput = document.createElement('input');
var winnerFormButton = document.createElement('button');

winnerH1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
winnerH3El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
winnerForm.setAttribute('method', 'post');
winnerForm.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
winnerFormLabel.setAttribute('for', 'my-initials');
winnerFormLabel.setAttribute('style', 'margin:10px');
winnerFormInput.setAttribute('type', 'text');
winnerFormInput.setAttribute('name', 'my-initials');
winnerFormInput.setAttribute('id', 'my-initials');
winnerFormInput.setAttribute('style', 'margin:10px');
winnerFormButton.setAttribute('id', 'save-score');
winnerFormButton.setAttribute('style', 'margin:10px');

winnerH1El.textContent = "All done!";
winnerH3El.textContent = "Your final score is: 99";
winnerFormLabel.textContent = "Enter your initials:";
winnerFormButton.textContent = "Save";

winnerFormButton.addEventListener('click', saveMyScore);


// ======== Set up High Scores Page elements ========

const HIGH_SCORES_MAX_CT = 5;
const HIGH_SCORES_LOCAL_STORAGE_NAME = "quizHighScores";

var scoresHeadingEl = document.createElement('h1');
var scoresScoreListEl = document.createElement('ol');
var scoresArrScores = [];
for (var i = 0; i < HIGH_SCORES_MAX_CT; i++) {
   scoresArrScores[i] = document.createElement('li');
}
var scoresDivButtons = document.createElement('div');
var scoresButtonGoBack = document.createElement('button');
var scoresButtonClear = document.createElement('button');

scoresHeadingEl.textContent = "High Scores";
scoresButtonGoBack.textContent = "Go Back";
scoresButtonClear.textContent = "Clear Scores";

scoresHeadingEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
scoresScoreListEl.setAttribute('id', 'scores-list');
scoresScoreListEl.setAttribute('style', 'margin:auto; width:20%; text-align:left;');
for (var i = 0; i < HIGH_SCORES_MAX_CT; i++) {
   scoresArrScores[i].setAttribute('class', 'high-score-li');
}
scoresDivButtons.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
scoresButtonGoBack.setAttribute('style', 'margin:10px;');
scoresButtonClear.setAttribute('style', 'margin:10px;');

scoresButtonGoBack.addEventListener('click', function() { createStartPage(); });
scoresButtonClear.addEventListener('click', function() { clearHighScores(); createHighScoresPage(); });


// ======== Quiz Questions and Answers ========

var qAndA = [
    {q:"Which variable(s) are considered global?.", a0:"Wrong", a1:"Wrong", a2:"Input", a3:"Wrong", r:2},
    {q:"What would be console logged if the input variable was set to zero?", a0:"No", a1:"No", a2:"one and two", a3:"Yes", r:3},
    {q:"Which statement correctly stores data into the Web Storage API?", a0:"computer.startUp();", a1:"Nyet", a2:"Nyet", a3:"Nyet", r:0}
]; 

// ======== End of variable initialization ========

// Remove all the nodes from main to "clear the slate" for the next page.
function initializeMainEl() {
   var theMain = document.getElementById('main-element');
   while (theMain.firstChild) {
      theMain.removeChild(theMain.firstChild);
      console.log('initializeMainEl - deleting node');
   }
}

// Clear the body and rebuild it with the start page elements
createStartPage()
function createStartPage() {
   initializeMainEl();
   updateTime(TIMEOUT_INITIAL_VALUE);
   topHdrEl.setAttribute('style', 'visibility:visible;');
   mainEl.appendChild(startH1El);
   mainEl.appendChild(startH3El);
   mainEl.appendChild(startBtnDiv);
   startBtnDiv.appendChild(startBtn);
}

function createQuizPage() {
   initializeMainEl();
   mainEl.appendChild(quizQuestionTextEl);
   mainEl.appendChild(quizAnswerListEl);
   quizAnswerListEl.appendChild(quizAnswer0El);
   quizAnswerListEl.appendChild(quizAnswer1El);
   quizAnswerListEl.appendChild(quizAnswer2El);
   quizAnswerListEl.appendChild(quizAnswer3El);
   mainEl.appendChild(quizAnswerResult);

   questionNumber = 0;
   startTimer(60);
   showNextQuestion();
}


function createTimedOutPage() {
   initializeMainEl();
   mainEl.appendChild(timedOutH1El);
   mainEl.appendChild(timedOutOkBtnDivEl);
   timedOutOkBtnDivEl.appendChild(timedOutOkBtn);
}


function createWinnerPage() {
   initializeMainEl();
   mainEl.appendChild(winnerH1El);
   mainEl.appendChild(winnerH3El);
   mainEl.appendChild(winnerForm);
   winnerForm.appendChild(winnerFormDiv);
   winnerFormDiv.appendChild(winnerFormLabel);
   winnerFormDiv.appendChild(winnerFormInput);
   winnerFormDiv.appendChild(winnerFormButton);

   winnerH3El.textContent = "Your final score is: " + timeLeft;
}


// Hide the High Scores and Time display at the top of the page before displaying
// the list of high scores.
function createHighScoresPage() {

   var tmpArrHighScores = fetchHighScores();
   
   initializeMainEl();
   topHdrEl.setAttribute('style', 'visibility:hidden;');
   mainEl.appendChild(scoresHeadingEl);
   if (tmpArrHighScores.length > 0) {
      mainEl.appendChild(scoresScoreListEl);

      // Have to remove all the list items because they are 'remembered'.
      var theList = document.getElementById('scores-list');
      while (theList.firstChild) {
         theList.removeChild(theList.firstChild);
      }

      for (var i = 0; i < tmpArrHighScores.length; i++) {
         scoresScoreListEl.appendChild(scoresArrScores[i]);
         scoresArrScores[i].textContent = tmpArrHighScores[i]['inits'] + ' - ' + tmpArrHighScores[i]['score'];
      }
   }
   mainEl.appendChild(scoresDivButtons);
   scoresDivButtons.appendChild(scoresButtonGoBack);
   scoresDivButtons.appendChild(scoresButtonClear);
}


function showNextQuestion() {
   if (questionNumber >= qAndA.length) {
      // Check the timeLeft because the timer may not have fired yet.
      if (timeLeft <= 0) {
         endQuiz(createTimedOutPage);
      } else {
         endQuiz(createWinnerPage);
      }
   } else {
      quizQuestionTextEl.textContent = qAndA[questionNumber]['q'];
      quizAnswer0El.textContent = qAndA[questionNumber]['a0'];
      quizAnswer1El.textContent = qAndA[questionNumber]['a1'];
      quizAnswer2El.textContent = qAndA[questionNumber]['a2'];
      quizAnswer3El.textContent = qAndA[questionNumber]['a3'];
      correctAnswer = Number(qAndA[questionNumber]['r']);
   }
}

function checkAnswer(choice) {
   if (choice === correctAnswer) {
      displayAnswerResult("Correct");
   }
   else {
      displayAnswerResult("Wrong");
      timeLeft -= 10;
   }
   questionNumber += 1;
   showNextQuestion();
}


function endQuiz(nextPage) {
   clearInterval(timeoutInterval);
   updateTime(0);
   nextPage();
}


// Display the result message for one second.
function displayAnswerResult(answerResult) {
   quizAnswerResult.textContent = answerResult;
   var answerResultInterval = setInterval(function() {
      quizAnswerResult.textContent = '';
      clearInterval(answerResultInterval);
   }, 1000);
}


// Add the user's score to the high score list.  Note that if the
// user's score wasn't in the top HIGH_SCORES_MAX_CT scores, it will
// not be saved.  (TBD) Don't allow the user to enter their initials
// if they're not going to make the list.
function saveMyScore() {
   event.preventDefault();

   var inits = document.querySelector("#my-initials").value.trim();
   var score = timeLeft;

   if (inits) {
      var tmpArrHighScores = fetchHighScores();
      tmpArrHighScores.push({'inits': inits, 'score': score});
      updateHighScores(tmpArrHighScores);
   }

   createHighScoresPage();  // Expensive page refresh
}


// Retrieve the high score list from localStorage
function fetchHighScores() {

   var tmpArrHighScores = [];
   var tmpStorageValue = localStorage.getItem(HIGH_SCORES_LOCAL_STORAGE_NAME);

   if (tmpStorageValue !== null && tmpStorageValue.length !== 0) {
      tmpArrHighScores = JSON.parse(tmpStorageValue);
   }

   console.log('fetchHighScores - tmpArrHighScores.length = ' + tmpArrHighScores.length);

   return tmpArrHighScores;
}


// Write only the top HIGH_SCORES_MAX_CT scores to localStorage.
function updateHighScores(arrHighScores) {

   arrHighScores.sort(function(a, b) { return b.score - a.score; });

   // Trim the list to the maximum number allowed.
   if (arrHighScores.length > HIGH_SCORES_MAX_CT) {
      arrHighScores.pop();
   }
 
   localStorage.setItem(HIGH_SCORES_LOCAL_STORAGE_NAME, JSON.stringify(arrHighScores));
}


// Remove the high score list from localStorage.
function clearHighScores() {

   for (var i = 0; i < HIGH_SCORES_MAX_CT; i++) {
      scoresArrScores[i].textContent = '';
   }

   localStorage.removeItem(HIGH_SCORES_LOCAL_STORAGE_NAME);
}


// Start the countdown timer for the quiz.
function startTimer() {

   timeLeft = TIMEOUT_INITIAL_VALUE;

   // Use `setInterval()` to call a function to be executed once each second
   timeoutInterval = setInterval(function() {
      if (timeLeft > 0) {         
         updateTime(--timeLeft);
      } else {
         updateTime(0);
         endQuiz(createTimedOutPage);  // timed out
      }
   }, 1000);
}


// Common function to update the time display to avoid having to format
// it in multiple places.
function updateTime(timeRemaining) {
   topHdrCurrTimeEl.textContent = 'Time: ' + timeRemaining;
}


// Kick off the quiz application
createStartPage()

