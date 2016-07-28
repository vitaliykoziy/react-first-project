import React from 'react';
import { SeparateLine } from '../common/separateLine';
import { MayLikeItemView } from './mayLikeItemView';
import styles from './home.css';

export const MayLike = () => (
  <div className={`${styles.mayLikeItems} ${styles.content}`}>
    <SeparateLine text="You May Like" />
    <div className={styles.row}>
      {
        [1, 2, 3, 4].map((item, index) => <MayLikeItemView key={index} />)
      }
    </div>
  </div>
);
