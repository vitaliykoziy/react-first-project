import React, { PropTypes } from 'react';
import styles from '../../css/app.css';

export const SeparateLine = (props) => (
  <div className={styles.separateLine}>
    <h6>{props.text}</h6>
  </div>
);

SeparateLine.propTypes = {
  text: PropTypes.string.isRequired,
};
