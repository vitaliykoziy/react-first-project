import React from 'react';
import { FullWidthAdvertising } from './components/fullWidthAdvertising';
import { MayLike } from './components/home/mayLike';
import { BarsContainer } from './components/home/barsContainer';
import styles from '../css/app.css';

export const Home = () => (
  <div className={styles.homeContent}>
    <FullWidthAdvertising />
    <BarsContainer />
    <MayLike />
  </div>
);
