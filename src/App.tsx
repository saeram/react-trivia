import { quiz } from "./components/constants";
import Trivia from "./components/Trivia";
import Buttons from "./components/Buttons";
import Answers from "./components/Answers";
import "./components/Trivia.css";
import { useState } from "react";

function App() {
  const [current, setCurrent] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const { question, choices, correctAnswer } = quiz[current];

  const handleAnswer = (choice: string, index: number) => {
    setSelectedIndex(index);
    if (choice === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const handlePrev = () => {
    setSelectedIndex(-1);
    setCurrent(current - 1);
    setSubmitted(true);
  };

  const handleNext = () => {
    setSelectedIndex(-1);
    setSubmitted(false);
    if (current !== quiz.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
      setShowResult(true);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    {
      answer ? setScore(score + 1) : setScore(score);
    }
  };

  const onTryAgain = () => {
    setShowResult(false);
    setScore(0);
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <>
          <h2>
            Your Score: <span className="score">{score}</span>
          </h2>
          <button className="try-again" onClick={onTryAgain}>
            Try again!
          </button>
        </>
      ) : (
        <>
          <Trivia question={question} current={current} />

          <Answers
            onAnswerClick={handleAnswer}
            choices={choices}
            selectedIndex={selectedIndex}
            submitted={submitted}
            answer={answer}
          />
          
          <div>
            {submitted && !answer ? (
              <h3>Uh-oh</h3>
            ) : submitted && answer ? (
              <h3>You got it!</h3>
            ) : (
              <></>
            )}
          </div>

          <Buttons
            onSubmit={handleSubmit}
            submitted={submitted}
            onPrev={handlePrev}
            onNext={handleNext}
            current={current}
          />
        </>
      )}
    </div>
  );
}

export default App;
