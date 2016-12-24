// @flow

import React from 'react';
import { Link } from 'react-router';
import styles from './Footer.css';

const Footer = () =>
  (
    <footer className={styles.footer}>
      <Link to="/Copyright"> Sean Kilgarriff &copy; 2016</Link>
    </footer>
  );

export default Footer;
