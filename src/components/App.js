import {
  useState,
  memo,
} from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default memo(function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const option = { good, neutral, bad };

  const onLeaveFeedback = (option) => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      
      default:
        return;
    }
  };

  return (
   <>
        <Section title="Pleas leave feedback">
          <FeedbackOptions
          options={Object.keys(option)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
       {good + neutral + bad > 0 && (<Section title="Statistics">
          <Statistics
            options={Object.keys(option)}
            state={option}
            total={good + neutral + bad}
        positiveFeedback={Math.round((100 * good) / (good + neutral + bad)) > 0 ? Math.round((100 * good) / (good + neutral + bad)) : 0}
        />
        </Section>)}
        {(good + neutral + bad) === 0 && (<Notification message="No feedback given"/>)}
      </>
)
});