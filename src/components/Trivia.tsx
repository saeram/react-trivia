import { useState } from "react";
import { quiz } from "./constants";
import "./Trivia.css";

function Trivia() {
  const [current, setCurrent] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [answer, setAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const { question, choices, correctAnswer } = quiz[current];

  const onAnswerClick = (choice: string, index: number) => {
    setSelectedIndex(index);
    if (choice === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };
  const onPrev = () => {
    setSelectedIndex(-1);
    setCurrent(current - 1);
    setSubmitted(true);
  };

  const onNext = () => {
    setSelectedIndex(-1);
    if (current !== quiz.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
      setShowResult(true);
    }

    setSubmitted(false);
  };

  const onSubmit = () => {
    setSubmitted(true);
    {
      answer ? setScore(score + 1) : setScore(score);
    }
  };

  return (
    <>
    <div className="quiz-container">
    {showResult ? <h2> Your Score: {score} </h2> :
    <>
      <span className="active-question">{current + 1}</span>
      <span className="total-question">/{quiz.length}</span>
      <h2>{question}</h2>
      <ol>
        {choices.map((choice, index) => (
          <li
            key={choice}
            onClick={() => onAnswerClick(choice, index)}
            className={selectedIndex === index ? "selected-index" : ""}>
            {choice}
          </li>
        ))}
      </ol>
      {submitted && !answer ? (
        <h3>Uh-oh</h3>
      ) : submitted && answer ? (
        <h3>You got it!</h3>
      ) : (
        <></>
      )}

      <div className="footer">
        <button onClick={onPrev} disabled={current === 0}>
          Previous
        </button>
        <button onClick={onSubmit} disabled={submitted}>
          Submit
        </button>

        <button onClick={onNext} disabled={!submitted}>
          {current === quiz.length - 1 ? "Finish" : "Next"}
        </button>
      </div></>}
    </div></>
    // <>
    //   <div className="quiz-container">
    //     <span className="active-question">{current + 1}</span>
    //     <span className="total-question">/{quiz.length}</span>
    //     <h2>{question}</h2>
    //     <ol>
    //       {choices.map((choice, index) => (
    //         <li
    //           key={choice}
    //           onClick={() => onAnswerClick(choice, index)}
    //           className={selectedIndex === index ? "selected-index" : ""}>
    //           {choice}
    //         </li>
    //       ))}
    //     </ol>
    //     {submitted && !answer ? (
    //       <h3>Uh-oh</h3>
    //     ) : submitted && answer ? (
    //       <h3>You got it!</h3>
    //     ) : (
    //       <></>
    //     )}

    //     <div className="footer">
    //       <button onClick={onPrev} disabled={current === 0}>
    //         Previous
    //       </button>
    //       <button onClick={onSubmit} disabled={submitted}>
    //         Submit
    //       </button>

    //       <button onClick={onNext} disabled={!submitted}>
    //         {current === quiz.length - 1 ? "Finish" : "Next"}
    //       </button>
    //     </div>
    //   </div>
    // </>
  );
}

export default Trivia;
