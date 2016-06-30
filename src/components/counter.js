import React from 'react';
import styles from '../../static/css/app.css';
export const Counter = (value) => (
  <div className={styles.counter}>
    <h1>{value}</h1>
    <button>+</button>
    <button>-</button>
  </div>
);
