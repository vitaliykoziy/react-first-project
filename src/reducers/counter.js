import {
  INCREMENT,
  DECREMENT,
} from '../actionTypes';
import initialState from '../initialstate';

export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return initialState;
  }
};

