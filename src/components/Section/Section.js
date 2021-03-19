import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

function Section({ children, title }) {
  return (
    <div className={styles.layout} >
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

Section.defaultProps = {
  title: '',
  children: '',
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;