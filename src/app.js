import React from 'react';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';
import Counter from './components/counter';

export const App = () => (
  <div>
    <Header />
    <Content />
    <Counter />
    <Footer />
  </div>
);
