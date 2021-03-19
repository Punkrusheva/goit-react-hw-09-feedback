import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics({ options, state, total, positiveFeedback }) {
  return (
    <>
      {options.map((option) => (
        <p key={option} className={styles.stat}>
          {option.slice(0, 1).toUpperCase() + option.slice(1)} : {state[option]}
        </p>
      ))}
      <div>
        <p className={styles.stat}>Total: {total}</p>
        <p className={styles.stat}>Positive feedback: {positiveFeedback}%</p>
      </div>
    </>
  )
}

Statistics.defaultProps = {
  options: [],
  state: '',
};

Statistics.propTypes = {
  options: PropTypes.array,
  state: PropTypes.object,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired
};

export default Statistics;