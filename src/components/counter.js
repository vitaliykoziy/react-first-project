import React, { PropTypes } from 'react';
import styles from '../../static/css/app.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { counterActions } from '../redux/actions/index';

const Counter = (props) => (
  <div className={styles.counter}>
    <button onClick={props.increment10Action}>+10</button>
    <button onClick={props.incrementAction} className={styles.mrl10}>+</button>
    <h1>{props.counter}</h1>
    <button onClick={props.decrementAction} className={styles.mrl10}>-</button>
    <button onClick={props.decrement10Action} className={styles.mrl10}>-10</button>
  </div>
);
Counter.propTypes = {
  counter: PropTypes.number,
  incrementAction: PropTypes.func,
  decrementAction: PropTypes.func,
  increment10Action: PropTypes.func,
  decrement10Action: PropTypes.func,
};

export default connect(
  state => ({ counter: state.counter }),
  dispatch => bindActionCreators(
    {
      ...counterActions,
    }, dispatch)
)(Counter);
