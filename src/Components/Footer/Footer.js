// @flow

import React from 'react';
import { Link } from 'react-router';
import styles from './Footer.css';

// new Date().getFullYear() function for automatically generating the year for the copyright.

const Footer = () =>
  (
    <footer className={styles.footer}>
      <Link to="/Copyright">&copy; Sean Kilgarriff 2016</Link>
    </footer>
  );

export default Footer;
