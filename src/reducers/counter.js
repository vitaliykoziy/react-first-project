import * as C from '../constants';
const initialState = require('../initialstate');

module.exports = function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case C.INCREMENT:
      return Object.assign({}, state, { counter: state.counter + 1 });
    case C.DECREMENT:
      return Object.assign({}, state, { counter: state.counter - 1 });
    default:
      return initialState;
  }
};

