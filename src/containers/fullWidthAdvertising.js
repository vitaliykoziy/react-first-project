import React from 'react';
import { Image } from '../utils/image';
import styles from '../../static/css/app.css';

export const FullWidthAdvertising = () => (
  <aside className={styles.fullWidthAds}>
    <Image src="ads.jpg" alt="advertising" />
  </aside>
);
