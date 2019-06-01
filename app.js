const correctAnswers = ["B", "A", "B", "B", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", e => {
  e.preventDefault();
  let score = 0;
  const userAnsers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value
  ];

  //check answers
  const checkAnswer = (answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 20;
    }
  };
  userAnsers.forEach(checkAnswer);

  //show results
  scrollTo(0, 0);
  result.classList.remove("d-none");

  //result animation
  let output = 0;

  const outputAnimation = () => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  };

  const timer = setInterval(outputAnimation, 10);
});
