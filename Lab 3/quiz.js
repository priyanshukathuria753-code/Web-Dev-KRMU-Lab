let questions = [
  { question1: "What does HTML stand for?",correctAnswer: "HyperText Markup Language"},
  { question2: "Which language is used to style web pages?",correctAnswer: "CSS"},
  { question3: "Which language is used for web development?", answer: "Javascript" },
  { question4: "What symbol is used for single-line comments in JavaScript?",correctAnswer: "//"},
  { question5: "What symbol is used for multi-line comments in JavaScript?",correctAnswer: "//"}

];

let score = 0; // Initialize score

function runQuiz() {
  for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i].question);
    if (userAnswer !== null && userAnswer.trim().toLowerCase() === questions[i].answer.toLowerCase()) {
      alert("Correct!");
      score++;
      console.log(`✅ Question ${i + 1}: Correct`);
    } else {
      alert("Wrong!");
      console.log(`❌ Question ${i + 1}: Wrong`);
      console.log(`Your answer: ${userAnswer}`);
      console.log(`Correct answer: ${questions[i].answer}`);
    }
    console.log(`Current Score: ${score}/${i + 1}\n`);
  }
  alert("Your final score is: " + score + "/" + questions.length);
  console.log(`🎉 Final Score: ${score}/${questions.length}`);
}

runQuiz();
