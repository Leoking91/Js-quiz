const questions = document.querySelectorAll(".question"); //get all questions
const nextBtn = document.getElementById("next-question"); //get next question button
const resultsBtn = document.getElementById("show-results"); //get show results button
const resultsScreen = document.getElementById("results-screen"); //get results screen
const restartBtn = document.getElementById("restart-quiz"); //get restart quiz button
const scoreText = document.getElementById("score-text"); //get score text

let current = 0; //store amount of questions
let score = 0; //initialize variable to store how many questions are correct(start at 0 end at 5)

console.log(questions);
questions[0].style.display = "block"; //set display for current question set to true (not the class)
//add event listener for next question button
nextBtn.addEventListener("click", () => {
  questions[current].style.display = "none"; //set current question to display none
  // remove correct and incorrect button classes
  let options = questions[current].children[2];
  options.children.forEach((li) => {
    li.classlist.remove("correct");
    li.classlist.remove("incorrect");
  });
  //set next question to display
  if (current < questions.length) {
    current += 1;
    questions[current].style.display = "block";
  } else {
    //if next question is last question display results button set next btn display to none
    nextBtn.style.display = "none";
    resultsBtn.style.display = "block";
  }
});

//add event listener for show results button
// remove correct and incorrect button classes
// sets show results to true
//set last question display to none
//show restart quiz button

//add restart quiz button event listener
//hide results and go back to first question

//get all options for question (not by class) use dom traversal instead of query selector or class name
// event listener when clicked for all options of that questions
//compare click option with correct answer (check if data correct equals true)
// if data correct is true change option style to green
//increment correct answer by 1
// if data correct is false change option style to red and highlight correct one green
//enable next question button
//if next question is last question enable show results button
// end of code
