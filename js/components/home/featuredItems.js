import React from 'react';
import { SeparateLine } from '../separateLine';
import { FeaturedView } from './featuredView';
import styles from '../../../css/app.css';


export const FeaturedItems = () => (
  <article className={styles.featuredList}>
    <header>
      <SeparateLine text="Featured" />
    </header>
    <content>
      {
        [1, 2, 3].map((item, index) => <FeaturedView key={index} />)
      }
    </content>
  </article>
);
