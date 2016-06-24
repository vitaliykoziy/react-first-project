import React from 'react';
import { SeparateLine } from './separateLine';
import { PopularCategoriesItem } from './popularCategoriesItem';
import styles from '../../css/app.css';

export const PopularCategories = () => (
  <div className={styles.popularCategories}>
    <SeparateLine text="popular categories" />
    <div className={styles.categoriesList}>
      {
        [1, 2, 3, 4, 5, 6].map((item, index) => <PopularCategoriesItem key={index} />)
      }
    </div>
  </div>
);
