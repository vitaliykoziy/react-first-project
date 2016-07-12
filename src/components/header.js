//  import modules
import React from 'react';
import { Link } from 'react-router';
//  import components
import { Image } from '../utils/image';
//  import styles
import styles from '../../static/css/app.css';

export const Header = () => (
  <header className={styles.headerContent}>
    <nav className={styles.navigationContent}>
      <div>
        <Link to="/">
          <Image src="logo.png" alt="Logo" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign Up</Link>
        </li>
      </ul>
    </nav>
  </header>
);
