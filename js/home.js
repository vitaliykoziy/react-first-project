import React from 'react';
import { FullWidthAdvertising } from './components/fullWidthAdvertising';
import { PopularCategories } from './components/popularCategories';
import styles from '../css/app.css';

export const Home = () => (
  <div className={styles.homeContent}>
    <FullWidthAdvertising />
    <PopularCategories />
  </div>
);
