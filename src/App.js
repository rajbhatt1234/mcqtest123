import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is 10+19",
      options: [
        { id: 0, text: "20", isCorrect: false },
        { id: 1, text: "29", isCorrect: true },
        { id: 2, text: "30", isCorrect: false },
        { id: 3, text: "40", isCorrect: false},
      ],
    },
    {
      text: "what is 5+5?",
      options: [
        { id: 0, text: "19", isCorrect: false },
        { id: 1, text: "10", isCorrect: true },
        { id: 2, text: "20", isCorrect: false },
        { id: 3, text: "30", isCorrect: false },
      ],
    },
    {
      text: "what is 40+6?",
      options: [
        { id: 0, text: "26", isCorrect: false },
        { id: 1, text: "30", isCorrect: false },
        { id: 2, text: "48", isCorrect: false },
        { id: 3, text: "46", isCorrect: true },
      ],
    },
    {
      text: "what is 7+7?",
      options: [
        { id: 0, text: "12", isCorrect: false },
        { id: 1, text: "13", isCorrect: false },
        { id: 2, text: "14", isCorrect: true  },
        { id: 3, text: "15", isCorrect: false },
      ],
    },
    {
      text: "what is 30+5?",
      options: [
        { id: 0, text: "50", isCorrect: false },
        { id: 1, text: "35", isCorrect: true  },
        { id: 2, text: "60", isCorrect: false },
        { id: 3, text: "70", isCorrect: false },
      ],
    },
    {
      text: "what is 30+20?",
      options: [
        { id: 0, text: "35", isCorrect: false },
        { id: 1, text: "50", isCorrect: true },
        { id: 2, text: "60", isCorrect: false },
        { id: 3, text: "70", isCorrect: false },
      ],
    },
    {
      text: "what is 30+30?",
      options: [
        { id: 0, text: "35", isCorrect: false },
        { id: 1, text: "50", isCorrect: false },
        { id: 2, text: "60", isCorrect: true },
        { id: 3, text: "70", isCorrect: false },
      ],
    },
    {
      text: "what is 100-30?",
      options: [
        { id: 0, text: "35", isCorrect: false },
        { id: 1, text: "50", isCorrect: false },
        { id: 2, text: "60", isCorrect: false },
        { id: 3, text: "70", isCorrect: true },
      ],
    },
    {
      text: "what is 30+40?",
      options: [
        { id: 0, text: "35", isCorrect: false },
        { id: 1, text: "50", isCorrect: false },
        { id: 2, text: "60", isCorrect: false },
        { id: 3, text: "70", isCorrect: true  },
      ],
    },
    {
      text: "what is 20+15?",
      options: [
        { id: 0, text: "35", isCorrect: true  },
        { id: 1, text: "50", isCorrect: false },
        { id: 2, text: "60", isCorrect: false },
        { id: 3, text: "70", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>New way traders</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;