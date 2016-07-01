/*
 This file defines the main Redux Store. It will be required by all "smart" components in the app
 */

const Redux = require('redux');
const CounterReducer = require('./reducers/counter');

const rootReducer = Redux.combineReducers({
  counter: CounterReducer,
});

module.exports = Redux.createStore(rootReducer);
