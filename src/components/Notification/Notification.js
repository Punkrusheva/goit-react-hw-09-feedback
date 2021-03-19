import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

function Notification({ message}) {
  return (
      <h2 className={styles.message}>{message}</h2>
  )
  
}

Notification.defaultProps = {
  message: '',
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;