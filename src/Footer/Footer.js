// @flow

import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import ReactGA from 'react-ga';
import styles from './Footer.css';

const Footer = () =>
  (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <ReactGA.OutboundLink
          eventLabel="Medium"
          to="https://medium.com/@SKilgarriff"
          className={styles.socialLink}
        >
          <FontAwesome
            name="stack"
            size="lg"
          >
            <FontAwesome
              name="circle"
              size="2x"
              stack="2x"
            />
            <FontAwesome
              name="medium"
              inverse
              stack="1x"
            />
          </FontAwesome>
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink
          eventLabel="Facebook"
          to="https://www.facebook.com/skilgarriff"
          className={styles.socialLink}
        >
          <FontAwesome
            name="stack"
            size="lg"
          >
            <FontAwesome
              name="circle"
              size="2x"
              stack="2x"
            />
            <FontAwesome
              name="facebook"
              inverse
              stack="1x"
            />
          </FontAwesome>
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink
          eventLabel="Twitter"
          to="https://twitter.com/SeanKilgarriff"
          className={styles.socialLink}
        >
          <FontAwesome
            name="stack"
            size="lg"
          >
            <FontAwesome
              name="circle"
              size="2x"
              stack="2x"
            />
            <FontAwesome
              name="twitter"
              inverse
              stack="1x"
            />
          </FontAwesome>
        </ReactGA.OutboundLink>
        <a
          href="mailto:sean@zzrot.com"
          className={styles.socialLink}
        >
          <FontAwesome
            name="stack"
            size="lg"
          >
            <FontAwesome
              name="circle"
              size="2x"
              stack="2x"
            />
            <FontAwesome
              name="envelope"
              inverse
              stack="1x"
            />
          </FontAwesome>
        </a>
        <ReactGA.OutboundLink
          eventLabel="Github"
          to="https://github.com/Skilgarriff"
          className={styles.socialLink}
        >
          <FontAwesome
            name="stack"
            size="lg"
          >
            <FontAwesome
              name="circle"
              size="2x"
              stack="2x"
            />
            <FontAwesome
              name="github-alt"
              inverse
              stack="1x"
            />
          </FontAwesome>
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink
          eventLabel="LinkedIn"
          to="https://www.linkedin.com/in/seankilgarriff"
          className={styles.socialLink}
        >
          <FontAwesome
            name="stack"
            size="lg"
          >
            <FontAwesome
              name="circle"
              size="2x"
              stack="2x"
            />
            <FontAwesome
              name="linkedin"
              inverse
              stack="1x"
            />
          </FontAwesome>
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink
          eventLabel="Instagram"
          to="https://www.instagram.com/skilgarriff/"
          className={styles.socialLink}
        >
          <FontAwesome
            name="stack"
            size="lg"
          >
            <FontAwesome
              name="circle"
              size="2x"
              stack="2x"
            />
            <FontAwesome
              name="instagram"
              inverse
              stack="1x"
            />
          </FontAwesome>
        </ReactGA.OutboundLink>
      </div>
      <div className={styles.copyright}>
        <Link to="copyright">&copy; Sean Kilgarriff 2016</Link>
        <Link to="pgp">PGP Key</Link>
      </div>
    </footer>
  );

export default Footer;
