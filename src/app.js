//  import modules
import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
//  import components
import { Header } from './components/header';
import { Footer } from './components/footer';
import Home from './components/home';
import { NotFound } from './components/notFound';

const Wrapper = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);
Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
/**
 * Please keep routes in alphabetical order
 */
export const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Wrapper}>
      <IndexRoute component={Home} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
