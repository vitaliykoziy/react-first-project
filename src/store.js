/*
 This file defines the main Redux Store. It will be required by all "smart" components in the app
 */

import { combineReducers, createStore, compose } from 'redux';
import { CounterReducer } from './reducers/counter';
import { persistState } from 'redux-devtools';
import DevTools from './containers/DevTools';

const rootReducer = combineReducers({
  counter: CounterReducer,
});
function getDebugSessionKey() {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}
const enhancer = compose(
  DevTools.instrument(),
  persistState(getDebugSessionKey())
);
export default createStore(rootReducer, {}, enhancer);
