import css from "./Feedback.module.css";

const Feedback = ({ feedbacks, totalFeedbacks, percentageOfFeedbacks }) => {
  return (
    <div>
      <p className={css.feedbackText}>Good: {feedbacks.good}</p>
      <p className={css.feedbackText}>Neutral: {feedbacks.neutral}</p>
      <p className={css.feedbackText}>Bad: {feedbacks.bad}</p>
      <p className={css.feedbackText}>Total: {totalFeedbacks}</p>
      <p className={css.feedbackText}>Positive: {percentageOfFeedbacks}%</p>
    </div>
  );
};
export default Feedback;
