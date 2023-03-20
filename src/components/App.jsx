import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import { Layout } from "./Layout";
import { useState } from "react";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = type => {    
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        throw new Error('There is undefined type of feedback');        
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  
  const countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage =  Math.round(good / countTotalFeedback() * 100);
    if(positiveFeedbackPercentage > 0) {
      return positiveFeedbackPercentage;
    } else {
      return 0;
    };

  };

  return (
    <Layout>
      <FeedbackOptions onLeaveFeedback={handleFeedback}></FeedbackOptions>
      <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}></Statistics>
    </Layout>
  );
};