import {
  useEffect,
  useState,
  memo,
  useRef,
} from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import '../App.css';

export default memo(function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const option = { good, neutral, bad };
  const total = useRef(0);
  const percent = useRef(0);

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

  useEffect(() => {
    total.current = good + neutral + bad;
    percent.current = Math.round((100 * good) / total.current);
    console.log(total.current, percent.current);
  }, [good, neutral, bad]);

  return (
   <>
        <Section title="Pleas leave feedback">
          <FeedbackOptions
          options={Object.keys(option)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
       {total.current > 0 && (<Section title="Statistics">
          <Statistics
            options={Object.keys(option)}
            state={option}
            total={total.current}
        positiveFeedback={percent.current > 0 ? percent.current : 0}
        />
        </Section>)}
        {total.current === 0 && (<Notification message="No feedback given"/>)}
      </>
)
});

/*class OldApp extends Component {
   
  countTotalFeedback = () => { 
    return Object.values(this.state).reduce((acc,value)=> acc+ value,0)
  }

  countPositiveFeedbackPercentage = () => {
    const percent = Math.round((100 * this.state.good) / this.countTotalFeedback());
    return percent>0 ? percent : 0;
  }

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    
    return (
       <>
        <Section title="Pleas leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        {total > 0 && (<Section title="Statistics">
          <Statistics
            options={Object.keys(this.state)}
            state={this.state}
            total={total}
            positiveFeedback={positiveFeedback}/>
        </Section>)}
        {total === 0 && (<Notification message="No feedback given"/>)}
      </>
    )
  }
}*/
