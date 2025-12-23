const questions = document.querySelectorAll(".question"); //get all questions
const nextBtn = document.getElementById("next-question"); //get next question button
const resultsBtn = document.getElementById("show-results"); //get show results button
const resultsScreen = document.getElementById("results-screen"); //get results screen
const restartBtn = document.getElementById("restart-quiz"); //get restart quiz button
const scoreText = document.getElementById("score-text"); //get score text

let current = 0; //store amount of questions
let score = 0; //initialize variable to store how many questions are correct(start at 0 end at 5)

questions[0].style.display = "block"; //set display for current question set to true (not the class)
nextBtn.style.display = "block";
//add event listener for next question button
nextBtn.addEventListener("click", () => {
  questions[current].style.display = "none"; //set current question to display none
  // remove correct and incorrect button classes
  let options = questions[current].children[2];
  options.querySelectorAll("li").forEach((li) => {
    li.children[0].classList.remove("correct");
    li.children[0].classList.remove("incorrect");
  });
  //set next question to display
  if (current < questions.length - 1) {
    current += 1;
    questions[current].style.display = "block";
    nextBtn.disabled = true;
  } else {
    //if next question is last question display results button set next btn display to none
    // nextBtn.style.display = "none";
    // resultsBtn.style.display = "block";
  }
});
//go over below with Ocean
//add event listener for show results button
resultsBtn.addEventListener("click", () => {
  // remove correct and incorrect button classes
  let options = questions[current].children[2];
  options.querySelectorAll("li").forEach((li) => {
    li.children[0].classList.remove("correct");
    li.children[0].classList.remove("incorrect");
  });
  // display results to true
  resultsScreen.style.display = "block";
  resultsScreen.children[0].innerHTML = "Your Score " + score + " out of 5";
  //set last question display to none
  questions[current].style.display = "none";
  //show restart quiz button
  restartBtn.style.display = "block";
  resultsBtn.style.display = "none";
});

//add restart quiz button event listener
restartBtn.addEventListener("click", () => {
  //hide results and go back to first question
  current = 0;
  score = 0;
  resultsScreen.style.display = "none";
  questions[0].style.display = "block"; //set display for current question set to true (not the class)
  nextBtn.style.display = "block";
  resultsBtn.disabled = true;
  nextBtn.disabled = true;
});

//get all options for question (not by class) use dom traversal instead of query selector or class name

questions.forEach((question, index) => {
  let options = question.children[2];
  options.querySelectorAll("li").forEach((li) => {
    li.children[0].addEventListener("click", (event) =>
      btnCallBack(event, index)
    );
  });
});

//compare click option with correct answer (check if data correct equals true)
const btnCallBack = (event, index) => {
  const element = event.target;
  // if data correct is true change option style to green
  if (element.dataset.correct) {
    element.classList.add("correct");
    //increment correct answer by 1
    score++;
  } else {
    // if data correct is false change option style to red and highlight correct one green
    element.classList.add("incorrect");
    const correctButton = questions[index].querySelector("[data-correct]");
    correctButton.classList.add("correct");
    console.log(correctButton, index);
  }
  //enable next question button

  //if next question is last question enable show results button
  if (current < questions.length - 1) {
    nextBtn.disabled = false;
  } else {
    resultsBtn.disabled = false;
    nextBtn.style.display = "none";
    resultsBtn.style.display = "block";
  }
  // end of code
};
