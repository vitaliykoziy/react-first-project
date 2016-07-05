import React from 'react';
import { FullWidthAdvertising } from './fullWidthAdvertising';
import { MayLike } from './home/mayLike';
import { BarsContainer } from './home/barsContainer';
import styles from '../../static/css/app.css';

export const Home = () => (
  <div className={styles.homeContent}>
    <FullWidthAdvertising />
    <BarsContainer />
    <MayLike />
  </div>
);
