const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", e => {
  e.preventDefault();
  let score = 0;
  const userAnsers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];

  //check ansers
  const checkAnswer = (answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  };
  userAnsers.forEach(checkAnswer);

  result.querySelector("span").textContent = `${score}%`;
  result.classList.remove("d-none");
});
