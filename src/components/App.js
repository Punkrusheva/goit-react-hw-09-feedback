import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import '../App.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (option) => {
    this.setState(
      { [option]: this.state[option] + 1 }
    );
  }
  
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
}
