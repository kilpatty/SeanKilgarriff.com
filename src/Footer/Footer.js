// @flow

import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import ReactGA from 'react-ga';
import styles from './Footer.css';

const Footer = () =>
  (
    <footer className={styles.footer}>

      <div className={styles.copyright}>
        <Link to="/copyright">&copy; Sean Kilgarriff 2016</Link>
      </div>
    </footer>
  );

export default Footer;
