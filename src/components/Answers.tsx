import "./Trivia.css";

function Answers({ choices, onAnswerClick, selectedIndex, submitted, answer }) {
  return (
    <>
      <ol>
        {choices.map((choice: string, index: number) => (
          <li
            key={choice}
            onClick={() => {
              onAnswerClick(choice, index);
            }}
            className={
              selectedIndex === index && submitted && answer
                ? "correct"
                : selectedIndex === index && submitted && !answer
                ? "wrong"
                : selectedIndex === index
                ? "selected-index"
                : ""
            }>
            {choice}
          </li>
        ))}
      </ol>
    </>
  );
}

export default Answers;
