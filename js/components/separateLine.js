import React, { PropTypes } from 'react';
import styles from '../../css/app.css';

export const SeparateLine = (props) => (
  <div className={styles.separateLine}>
    <h3>{props.text}</h3>
  </div>
);

SeparateLine.propTypes = {
  text: PropTypes.string.isRequired,
};
