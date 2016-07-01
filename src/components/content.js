import React from 'react';
import Home from './home';
import { connect } from 'react-redux';

let Content = () => (
  <Home />
);
Content = connect()(Content);
export default Content;
