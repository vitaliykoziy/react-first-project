import * as actions from '../actions/index';

export const CounterReducer = (state = 0, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return state + 1;
    case actions.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

