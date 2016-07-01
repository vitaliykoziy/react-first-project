import React from 'react';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import Counter from './components/counter';
import { connect } from 'react-redux';

let App = (props) => {
  return (
    <div>
      <Header />
      <Content />
      <Counter />
      <Footer />
    </div>
  );
};
App = connect()(App);
export default App;
