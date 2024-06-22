import css from "./Options.module.css";

const Options = ({ addFeedback, totalFeedbacks, resetFeedbacks }) => {
  return (
    <div className={css.btn}>
      <button type="button" onClick={() => addFeedback("good")}>
        Good
      </button>
      <button type="button" onClick={() => addFeedback("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => addFeedback("bad")}>
        Bad
      </button>
      {totalFeedbacks ? (
        <button type="button" onClick={resetFeedbacks}>
          Reset
        </button>
      ) : null}
    </div>
  );
};

export default Options;
