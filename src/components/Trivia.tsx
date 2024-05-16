import { useState } from "react";
import { quiz } from "./constants";
import "./Trivia.css";


function Trivia() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(0);
  const [answer, setAnswer] = useState(false);

  const { question, choices, correctAnswer } = quiz[currentQuestion];
  const onAnswerClick = (choice:string, index:number) => {
    setAnswerIndex(index);
    if (choice === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  return (
    <>
      <div className="quiz-container">
        <span className="active-question">{currentQuestion + 1}</span>
        <span className="total-question">/{quiz.length}</span>
        <h2>{question}</h2>
        <ul>
          {choices.map((choice, index) => (
            <li key={choice} onClick={() => onAnswerClick(choice, index)}>{index + 1}.{choice}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Trivia;
