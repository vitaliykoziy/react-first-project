import React from 'react';
import { SeparateLine } from '../separateLine';
import { LatestView } from './latestView';
import styles from '../../../css/app.css';


export const LatestItems = () => (
  <article className={styles.latesList}>
    <header>
      <SeparateLine text="Latest" />
    </header>
    <content>
      {
        [1, 2, 3].map((item, index) => <LatestView number={index + 1} key={index} />)
      }
    </content>
  </article>
);
