import React from 'react';
import Helmet from 'react-helmet';
import { FullWidthAdvertising } from './fullWidthAdvertising';
import { MayLike } from './home/mayLike';
import { BarsContainer } from './home/barsContainer';
import styles from '../../static/css/app.css';

export const Home = () => (
  <div className={styles.homeContent}>
    <Helmet
      title="Home"
      meta={
      [
        {
          name: 'description',
          content: 'Home Helmet application',
        },
        {
          property: 'og:type',
          content: 'home article',
        },
      ]
      }
    />
    <FullWidthAdvertising />
    <BarsContainer />
    <MayLike />
  </div>
);
