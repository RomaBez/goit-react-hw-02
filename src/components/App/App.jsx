import { useEffect, useState } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

import css from "./App.module.css";

const App = () => {
  const [feedbacks, addFeedback] = useState(() => {
    const savedFeedbacks = window.localStorage.getItem("savedFeedbackClicks");
    if (savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    addFeedback({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  const resetFeedbacks = () => {
    addFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedbacks = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const percentageOfFeedbacks = Math.round(
    (feedbacks.good / totalFeedbacks) * 100
  );

  useEffect(() => {
    window.localStorage.setItem(
      "savedFeedbackClicks",
      JSON.stringify(feedbacks)
    );
  }, [feedbacks]);

  return (
    <div className={css.container}>
      <Description
        title="Sip Happens Café "
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <div>
        <Options
          addFeedback={updateFeedback}
          totalFeedbacks={totalFeedbacks}
          resetFeedbacks={resetFeedbacks}
        />
      </div>
      {totalFeedbacks ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedbacks={totalFeedbacks}
          percentageOfFeedbacks={percentageOfFeedbacks}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
