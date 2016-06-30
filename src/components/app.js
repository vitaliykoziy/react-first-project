import React from 'react';
import { Header } from './header';
import { Content } from './content';
import { Footer } from './footer';
import { Counter } from './counter';


export const App = (store) => (
  <div>
    <Header />
    <Content />
    <Counter value={store.getState()} />
    <Footer />
  </div>
);
