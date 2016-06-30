import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

// Render the root component normally
const rootEl = document.getElementById('root');

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, rootEl);
