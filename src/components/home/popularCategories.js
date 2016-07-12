import React from 'react';
import { SeparateLine } from '../common/separateLine';
import { PopularCategoryView } from './popularCategoryView';
import styles from './home.css';


export const PopularCategories = () => (
  <div className={styles.popularCategories}>
    <SeparateLine text="popular categories" />
    <div className={styles.itemsList}>
      {
        [1, 2, 3].map((item, index) => <PopularCategoryView key={index} />)
      }
    </div>
  </div>
);
