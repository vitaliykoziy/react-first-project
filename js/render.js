/* eslint global-require: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

// Render the root component normally
const rootEl = document.getElementById('root');

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, rootEl);

/*
 if (module.hot) {
 // Whenever a new version of app.js is available
 module.hot.accept('./app', () => {
 // Require the new version and render it instead
 const NextApp = require('./app');
 ReactDOM.render(<NextApp />, rootEl);
 });
 }
 */
