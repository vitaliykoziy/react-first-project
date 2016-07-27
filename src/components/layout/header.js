//  import modules
import React from 'react';
import { Link } from 'react-router';
//  import components
import { Image } from '../../utils/image';
//  import styles
import styles from '../../../static/css/_app.css';

export const Header = () => (
  <header className={styles.headerContent}>
    <nav className={`${styles.content} ${styles.row}`}>
      <div className={styles.col_4}>
        <Link to="/">
          <Image src="logo.png" alt="Logo" />
        </Link>
      </div>
      <div className={styles.col_6}>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
