import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import { App } from './app';
import store from './redux/create';
import DevTools from './containers/DevTools';
// Render the root component normally
const rootEl = document.getElementById('root');
if (module.hot) {
  module.hot.accept();
}
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Helmet
        title="My Business"
        titleTemplate="My Business - %s"
      />
      <App />
      <DevTools />
    </div>
  </Provider>,
  rootEl
);
