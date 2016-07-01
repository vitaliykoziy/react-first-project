import React from 'react';
import styles from '../../static/css/app.css';
import { connect } from 'react-redux';
import { increment } from '../actions';

let Counter = (props) => {
  return (
    <div className={styles.counter}>
      <h1>{props.counter}</h1>
      <button onClick={props.increment}>+</button>
      <button>-</button>
    </div>
  );
};
//  onClick={store.dispatch(actions.increment)}
Counter = connect(
  state => {
    return { counter: state.counter };
  },
  {
    increment
  }
)(Counter);
export default Counter;
