//  import modules
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
//  import components
import Home from './home';
import { NotFound } from './notFound';

/**
 * Please keep routes in alphabetical order
 */
export const Content = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Home} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
