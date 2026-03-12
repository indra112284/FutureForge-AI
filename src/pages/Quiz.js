import React, { useState } from "react";
import QuizData from "../data/QuizData";

function Quiz() {
  const skill = localStorage.getItem("selectedSkill") || "python";
  const difficulty = localStorage.getItem("difficulty") || "easy";

  const questions = QuizData?.[skill]?.[difficulty] || [];

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (index, option) => {
    setAnswers({ ...answers, [index]: option });
  };

  const handleSubmit = () => {
  let correct = 0;

  questions.forEach((q, index) => {
    if (answers[index] === q.answer) {
      correct++;
    }
  });

  setScore(correct);
  setSubmitted(true);

  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (user) {
    user.scores = user.scores || [];

    const today = new Date().toLocaleDateString();

    user.scores.push({
      skill,
      difficulty,
      score: correct,
      total: questions.length,
      date: today
    });

    localStorage.setItem("currentUser", JSON.stringify(user));

    // 🔥 Adaptive Difficulty Logic
    let newDifficulty = difficulty;
    const percentage = (correct / questions.length) * 100;

    if (percentage >= 70) {
      if (difficulty === "easy") newDifficulty = "medium";
      else if (difficulty === "medium") newDifficulty = "hard";
    } else if (percentage < 40) {
      if (difficulty === "hard") newDifficulty = "medium";
      else if (difficulty === "medium") newDifficulty = "easy";
    }

    localStorage.setItem("difficulty", newDifficulty);
  }
};


  if (!questions.length) {
    return <h2 style={{ padding: "40px" }}>No Questions Found</h2>;
  }

  if (submitted) {
    return (
      <div className="quiz-wrapper">
        <div className="quiz-card" style={{ textAlign: "center" }}>
          <h2>Quiz Completed ✅</h2>
          <h1>
            Your Score: {score} / {questions.length}
          </h1>
          <button
            className="submit-test-btn"
            onClick={() => window.location.href = "/dashboard"}
          >
            Go To Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-wrapper">
      <div className="quiz-card">
        <h1 className="quiz-title">
          {skill.toUpperCase()} - {difficulty.toUpperCase()} QUIZ
        </h1>

        {questions.map((q, index) => (
          <div key={index} className="question-box">
            <div className="question-text">
              {index + 1}. {q.question}
            </div>

            <div className="options-box">  
  {q.options.map((opt, i) => (
    <label key={i} className="option-row">
      <input
        type="radio"
        name={`question-${index}`}
        value={opt}
        checked={answers[index] === opt}
        onChange={() => handleSelect(index, opt)}
      />
      <span>{opt}</span>
    </label>
  ))}
</div>

          </div>
        ))}

        <button className="submit-test-btn" onClick={handleSubmit}>
          Submit Test
        </button>
      </div>
    </div>
  );
}

export default Quiz;
