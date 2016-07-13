//  import modules
import React from 'react';
//  import components
import LatestItems from './latestItems';
import FeaturedItems from './featuredItems';
import { PopularCategories } from './popularCategories';
//  import styles
import styles from './home.css';
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
