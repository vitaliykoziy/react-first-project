import React, { PropTypes } from 'react';
import styles from '../../static/css/app.css';
import { connect } from 'react-redux';
import { increment } from '../actions';

const Counter = (props) => (
  <div className={styles.counter}>
    <h1>{props.counter}</h1>
    <button onClick={props.increment}>+</button>
    <button>-</button>
  </div>
);
Counter.propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func,
};

export default connect(
  state => {
    return { counter: state.counter };
  },
  {
    increment,
  }
)(Counter);
