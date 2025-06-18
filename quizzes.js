const quiz = [
  { question: "What’s your dog's favorite snack time?", answers: [
    { text: "After a long walk", value: 2 },
    { text: "Every hour", value: 1 },
    { text: "Chill at home", value: 3 }
  ]},
  { question: "Choose a word:", answers: [
    { text: "Crunchy", value: 3 },
    { text: "Protein", value: 2 },
    { text: "Natural", value: 1 }
  ]},
  { question: "Your dog's partner in crime is:", answers: [
    { text: "A tennis ball", value: 1 },
    { text: "A hike trail", value: 2 },
    { text: "A cozy bed", value: 3 }
  ]}
];

let current = 0, score = 0;
const quizEl = document.getElementById('quiz');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');

function loadQuiz() {
  resultEl.innerHTML = "";
  const q = quiz[current];
  quizEl.innerHTML = `<h2>${q.question}</h2>`;
  q.answers.forEach((a) => {
    const btn = document.createElement('button');
    btn.className = 'btn answer-btn';
    btn.innerText = a.text;
    btn.onclick = () => {
      score += a.value;
      current++;
      if(current < quiz.length) loadQuiz();
      else showResult();
    };
    quizEl.appendChild(btn);
  });
  nextBtn.style.display = 'none';
}

function showResult() {
  quizEl.innerHTML = '';
  let message = score <= 4 ? "You’re a Relaxed Snacker 💤" :
                score <= 6 ? "You’re an Adventurous Pup 🚀" :
                "You’re a Power Cruncher 💪";
  resultEl.innerText = message;
  nextBtn.innerText = "Retake Quiz";
  nextBtn.style.display = 'block';
  nextBtn.onclick = () => { current=0; score=0; loadQuiz(); };
}

nextBtn.onclick = loadQuiz;
