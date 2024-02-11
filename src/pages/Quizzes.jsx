import './Layout.css'
import React, { useState } from "react";
const Quizzes = () => {

  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "What color is this?",
      videoUrl: "./yellow.mp4",
      options: [
        { id: 0, text: "Black", isCorrect: false },
        { id: 1, text: "Blue", isCorrect: false },
        { id: 2, text: "Green", isCorrect: false },
        { id: 3, text: "Yellow", isCorrect: true },
      ],
    },
    {
      text: "What color is this?",
      videoUrl: "./green.mp4",
      options: [
        { id: 0, text: "Green", isCorrect: true },
        { id: 1, text: "Red", isCorrect: false },
        { id: 2, text: "Purple", isCorrect: false },
        { id: 3, text: "Yellow", isCorrect: false },
      ],
    },
    {
      text: "What color is this?",
      videoUrl: "./blue.mp4",
      options: [
        { id: 0, text: "Blue", isCorrect: true },
        { id: 1, text: "White", isCorrect: false },
        { id: 2, text: "Green", isCorrect: false },
        { id: 3, text: "Black", isCorrect: false },
      ],
    },
    {
      text: "What color is this?",
      videoUrl: "./purple.mp4",
      options: [
        { id: 0, text: "Red", isCorrect: false },
        { id: 1, text: "Purple", isCorrect: true },
        { id: 2, text: "Green", isCorrect: false },
        { id: 3, text: "Blue", isCorrect: false },
      ],
    },
    {
      text: "What color is this?",
      videoUrl: "./black.mp4",
      options: [
        { id: 0, text: "Orange", isCorrect: false },
        { id: 1, text: "Pink", isCorrect: false },
        { id: 2, text: "Black", isCorrect: true },
        { id: 3, text: "Purple", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    if(isCorrect){
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length){
      setCurrentQuestion(currentQuestion + 1); 
    } else {
      setFinalResults(true);
    }

    setCurrentQuestion(currentQuestion + 1);
  }

    const restartGame = () => {
      setScore(0);
      setCurrentQuestion(0);
      setFinalResults(false);
    }
    return (
      
      <div className="App">
        <h1>Sign Language Quiz</h1>
        <h2>Current Score: {score}</h2>

        { showFinalResults ? (
        <div className='final-results'>
        <h1>Final Results</h1>
        <h2>
          {score} out of {questions.length} correct - ({(score/questions.length)* 100}%)

        </h2>
        <button onClick={() => restartGame()}>Restart Game</button>
        </div> ) 
        : (
        


        <div className="question-card">
          <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li onClick={() => optionClicked(option.isCorrect)}key={option.id}>{option.text}</li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
    )
  };
  
  export default Quizzes;