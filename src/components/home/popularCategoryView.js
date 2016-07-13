import React from 'react';
import styles from './home.css';

export const PopularCategoryView = () => (
  <div className={styles.category}>
    <a href="#">
      <i className="fa fa-tag"></i>
      <span className={styles.name}>GROWTH</span>
    </a>
    <small className={styles.postsCount}>
      <i>(453 posts)</i>
    </small>
  </div>
);
