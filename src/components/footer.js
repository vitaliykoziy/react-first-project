import React from 'react';
import styles from '../../static/css/app.css';
import { connect } from 'react-redux';

let Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <p>
        &copy; 2016 All right reserved
      </p>
    </div>
  </footer>
);
Footer = connect()(Footer);
export default Footer;
