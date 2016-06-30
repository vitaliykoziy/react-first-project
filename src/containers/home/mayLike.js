import React from 'react';
import { SeparateLine } from '../separateLine';
import { MayLikeItemView } from './mayLikeItemView';
import styles from '../../../static/css/app.css';

export const MayLike = () => (
  <div className={styles.mayLikeItems}>
    <SeparateLine text="You May Like" />
    <div className={styles.wrapper}>
      {
        [1, 2, 3, 4].map((item, index) => <MayLikeItemView key={index} />)
      }
    </div>
  </div>
);
