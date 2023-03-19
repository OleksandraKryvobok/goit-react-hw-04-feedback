import React from "react";
import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import { Layout } from "./Layout";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }  

  onLeaveFeedback = e => {
    const feedback = e.currentTarget.textContent.toLowerCase();

    this.setState(prevState => { 
      return {
        [feedback]: prevState[feedback] + 1,
      }
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positiveFeedbackPercentage =  Math.round(good / this.countTotalFeedback() * 100);
    if(positiveFeedbackPercentage > 0) {
      return positiveFeedbackPercentage;
    } else {
      return 0;
    };

  };

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);

    return (
      <Layout>
        <FeedbackOptions options={keys} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
        <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>
      </Layout>
    );
  }
};