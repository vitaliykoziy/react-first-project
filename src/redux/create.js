/*
 This file defines the main Redux Store. It will be required by all "smart" components in the app
 */

//  import modules
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
//  import client middleware
import callApi from './middleware/clientMiddleware';
//  import containers
import DevTools from '../containers/DevTools';
//  import reducers
import {
  fetchSeoDataReducer,
} from './reducers/seo';
import {
  fetchLatestReducer,
  fetchFeaturedReducer,
} from './reducers/home';
import {
  fetchPostDataReducer,
  fetchPostCommentsReducer,
} from './reducers/posts';

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
  form: formReducer,
  seo: fetchSeoDataReducer,
  home: combineReducers({
    latestItems: fetchLatestReducer,
    featuredItems: fetchFeaturedReducer,
  }),
  posts: combineReducers({
    data: fetchPostDataReducer,
    comments: fetchPostCommentsReducer,
  }),
});

export default createStore(rootReducer, enhancer);
