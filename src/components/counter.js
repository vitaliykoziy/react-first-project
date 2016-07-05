import React, { PropTypes } from 'react';
import styles from '../../static/css/app.css';
import { connect } from 'react-redux';
import {
  incrementAction,
  decrementAction,
  increment10Action,
  decrement10Action,
} from '../actions';

const Counter = (props) => (
  <div className={styles.counter}>
    <button onClick={props.doIncrement10}>+10</button>
    <button onClick={props.doIncrement} className={styles.mrl10}>+</button>
    <h1>{props.counter}</h1>
    <button onClick={props.doDecrement} className={styles.mrl10}>-</button>
    <button onClick={props.doDecrement10} className={styles.mrl10}>-10</button>
  </div>
);
Counter.propTypes = {
  counter: PropTypes.number,
  doIncrement: PropTypes.func,
  doDecrement: PropTypes.func,
  doIncrement10: PropTypes.func,
  doDecrement10: PropTypes.func,
};

const mapStateToProps = (state) => ({ counter: state.counter });

const mapDispatchToProps = (dispatch) => ({
  doIncrement: () => {
    dispatch(incrementAction());
  },
  doDecrement: () => {
    dispatch(decrementAction());
  },
  doIncrement10: () => {
    dispatch(increment10Action());
  },
  doDecrement10: () => {
    dispatch(decrement10Action());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
