import * as C from '../constants';
import initialState from '../initialstate';

export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case C.INCREMENT:
      return state + 1;
    case C.DECREMENT:
      return state - 1;
    default:
      return initialState;
  }
};

