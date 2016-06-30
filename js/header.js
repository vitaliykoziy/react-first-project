import React from 'react';
import { Image } from './utils/image';
import styles from '../css/app.css';

export const Header = () => (
  <header className={styles.headerContent}>
    <nav className={styles.navigationContent}>
      <div>
        <a href="/">
          <Image src="logo.png" alt="Logo" />
        </a>
      </div>
      <ul>
        <li>
          <a href="/">first</a>
        </li>
        <li>
          <a href="/">second</a>
        </li>
      </ul>
    </nav>
  </header>
);
