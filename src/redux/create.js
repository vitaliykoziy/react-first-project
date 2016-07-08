/*
 This file defines the main Redux Store. It will be required by all "smart" components in the app
 */

//  import modules
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
//  import client middleware
import callApi from './middleware/clientMiddleware';
//  import containers
import DevTools from '../containers/DevTools';
//  import reducers
import { fetchSeoDataReducer } from './reducers/seo';
import { fetchLatestReducer } from './reducers/home';

function getDebugSessionKey() {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}
const logger = createLogger({
  collapsed: true,
});
const enhancer = compose(
  applyMiddleware(thunk, callApi, promise, logger),
  DevTools.instrument(),
  persistState(getDebugSessionKey())
);

const rootReducer = combineReducers({
  seo: fetchSeoDataReducer,
  latestItemsData: fetchLatestReducer,
});

export default createStore(rootReducer, enhancer);
