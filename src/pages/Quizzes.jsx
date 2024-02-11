import './Layout.css'
import React, { useState } from "react";
const Quizzes = () => {

  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

    return (
      <div className="App">
        <h1>Sign Language Quiz</h1>
        <h2>Current Score: {score}</h2>

        { showFinalResults ? (
        <div className='final-results'>
        <h1>Final Results</h1>
        <h2>
          1 out of 5 correct - 20%

        </h2>
        <button>Restart Game</button>
        </div> ) 
        : (
        


        <div className="question-card">
          <h2>Question {currentQuestion + 1} out of </h2>
          <h3 className="question-text">What letter is this?</h3>


          <ul>
            <li>Red</li>
            <li>Blue</li>
            <li>Green</li>
            <li>Purple</li>
          </ul>
        </div>
      )}
    </div>
    )
  };
  
  export default Quizzes;