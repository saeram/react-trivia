import { quiz } from "./constants";
import "./Trivia.css";

function Buttons({ onSubmit, submitted, onPrev, onNext, current }) {
  return (
    <>
      <button onClick={onPrev} disabled={current === 0}>
        Previous
      </button>
      <button onClick={onSubmit} disabled={submitted}>
        Submit
      </button>

      <button onClick={onNext} disabled={!submitted}>
        {current === quiz.length - 1 ? "Finish" : "Next"}
      </button>
    </>
  );
}

export default Buttons;
