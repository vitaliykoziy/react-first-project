import React from 'react';
import LatestItems from './latestItems';
import FeaturedItems from './featuredItems';
import { PopularCategories } from './popularCategories';
import styles from '../../../static/css/app.css';
import 'font-awesome-webpack';

export const BarsContainer = () => (
  <div className={styles.barsWraper}>
    <div className={styles.leftBar}>
      <LatestItems />
    </div>

    <div className={styles.rightBar}>
      <FeaturedItems />
      <PopularCategories />
    </div>
  </div>
);
