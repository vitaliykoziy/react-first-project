//  import modules
import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
//  import components
import { Header } from './components/layout/header';
import { Footer } from './components/layout/footer';
import Home from './components/home/home';
import Login from './components/login/login';
import SignUp from './components/signUp/signUp';
import PostView from './components/postView/postView';
import { NotFound } from './components/notFound/notFound';

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
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/post/:id" component={PostView} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
