//  import modules
import React from 'react';
//  import components
import { Image } from '../../utils/image';
//  import styles
import styles from './home.css';

export const FullWidthAdvertising = () => (
  <aside className={styles.fullWidthAds}>
    <Image src="ads.jpg" alt="advertising" />
  </aside>
);
