import {
  INCREMENT,
  DECREMENT,
  INCREMENT_10,
  DECREMENT_10,
} from '../actionTypes';
import initialState from '../initialstate';

export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case INCREMENT_10:
      return state + 10;
    case DECREMENT_10:
      return state - 10;
    default:
      return initialState;
  }
};

