import {
  INCREMENT,
  DECREMENT,
  INCREMENT_10,
  DECREMENT_10,
} from './actionTypes';

export const incrementAction = () => ({ type: INCREMENT });
export const decrementAction = () => ({ type: DECREMENT });
export const increment10Action = () => ({ type: INCREMENT_10 });
export const decrement10Action = () => ({ type: DECREMENT_10 });
