import { quiz } from "./constants";
import "./Trivia.css";
interface Props {
  question: string,
  current: number
}

function Trivia({question, current}: Props) {
 

  return (
    <>
            <span className="active-question">{current + 1}</span>
            <span className="total-question">/{quiz.length}</span>
            <h2>{question}</h2>
        
          </>
        )}

export default Trivia;
