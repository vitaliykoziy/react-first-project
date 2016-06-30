import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { App } from './app';
import { Provider } from 'react-redux';
import { CounterReducer } from '../reducers/counter';

// Render the root component normally
const rootEl = document.getElementById('root');

const store = createStore(CounterReducer);

if (module.hot) {
  module.hot.accept();
}
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store} key="provider">
    <App />
  </Provider>,
  rootEl
);
