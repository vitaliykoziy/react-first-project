import React from 'react';
import { Image } from '../utils/image';
import styles from '../../static/css/app.css';
import { connect } from 'react-redux';

let Header = () => (
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
Header = connect()(Header);
export default Header;
