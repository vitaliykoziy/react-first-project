import React from 'react';
import { FullWidthAdvertising } from '../containers/fullWidthAdvertising';
import { MayLike } from '../containers/home/mayLike';
import { BarsContainer } from '../containers/home/barsContainer';
import styles from '../../static/css/app.css';

export const Home = () => (
  <div className={styles.homeContent}>
    <FullWidthAdvertising />
    <BarsContainer />
    <MayLike />
  </div>
);
