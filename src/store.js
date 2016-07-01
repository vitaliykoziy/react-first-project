/*
 This file defines the main Redux Store. It will be required by all "smart" components in the app
 */

import { combineReducers, createStore } from 'redux';
import { CounterReducer } from './reducers/counter';

const rootReducer = combineReducers({
  counter: CounterReducer,
});

export default createStore(rootReducer);
