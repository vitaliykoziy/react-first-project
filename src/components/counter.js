import React, { PropTypes } from 'react';
import styles from '../../static/css/app.css';
import { connect } from 'react-redux';
import { increment as incrementAction, decrement as decrementAction } from '../actions';

const Counter = (props) => (
  <div className={styles.counter}>
    <h1>{props.counter}</h1>
    <button onClick={props.doIncrement}>+</button>
    <button onClick={props.doDecrement}>-</button>
  </div>
);
Counter.propTypes = {
  counter: PropTypes.number,
  doIncrement: PropTypes.func,
  doDecrement: PropTypes.func,
};

const mapStateToProps = (state) => ({ counter: state.counter });

const mapDispatchToProps = (dispatch) => ({
  doIncrement: () => { dispatch(incrementAction()); },
  doDecrement: () => { dispatch(decrementAction()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
