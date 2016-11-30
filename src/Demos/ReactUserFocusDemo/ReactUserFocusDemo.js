import React from 'react';
import Title from 'react-title-component';
import classnames from 'classnames';
import ReactUserFocus from 'react-user-focus';
import ReactGA from 'react-ga';

import styles from './ReactUserFocusDemo.css';

import Navigation from '../../Navigation';

class ReactUserFocusDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      focused: true,
      idle: false,
    };
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onIdleChange = this.onIdleChange.bind(this);
  }

  onFocusChange(isHidden) {
    this.setState({ focused: !isHidden });
  }

  onIdleChange(isIdle) {
    this.setState({ idle: isIdle });
  }

  render() {
    const classes = classnames(styles.demoFace,
(this.state.idle || !this.state.focused) ? styles.paused : null
    );

    return (
      <div className={styles.wrapper}>
        <Title render={previousTitle => `React User Focus Demo | ${previousTitle}`} />
        <Navigation />
        <ReactUserFocus
          onFocusChange={this.onFocusChange}
          onIdleChange={this.onIdleChange}
          idleTime={2}
        />

        <main className={styles.container}>
          <div className={styles.content}>
            <h1>React User Focus Demo</h1>
            <p className={styles.disclaimer}>Idle time set to 2 seconds</p>
            <div className={styles.logoContainer}>
              <svg className={styles.faceWrapper} viewBox="14 24 348 619" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <desc>Sean Kilgarriff Face Logo</desc>
                <g id="Sean-Logo-with-Bowtie" className={classes} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(14.000000, 24.000000)">
                  <path d="M298.4,551.5 L298.4,551.5 C298.4,530.5 293.9,507.7 286.4,490 C285.2,487 281.9,485.5 278.6,485.8 C244.1,491.2 210.2,506.5 190.4,526.3 C188.9,527.8 187.1,528.4 185.3,528.4 L155.6,528.4 C153.5,528.4 151.7,527.5 150.5,526.3 C130.4,506.5 96.8,491.5 62,485.8 C58.7,485.5 55.4,487 54.2,490 C46.7,507.7 42.2,530.5 42.2,551.5 L43.4,551.5 L43.4,552.1 L43.4,551.5 L42.2,551.5 C42.2,575.5 46.7,595.9 54.2,613.9 C55.4,616.9 58.7,618.7 62,618.4 C96.8,613 130.4,598 150.2,578.2 C151.7,576.7 153.5,576.1 155.3,576.1 L185.3,576.1 C187.4,576.1 189.2,577 190.4,578.2 C210.2,598 243.8,613 278.6,618.4 C281.9,619 284.9,616.9 286.4,613.9 C293.9,595.9 298.4,575.5 298.4,551.5 L298.4,551.5 L298.4,552.1 L298.4,551.5 L298.4,551.5 Z" id="BowTie" />
                  <path d="M283.8,453.7 C283.8,442.5 289.4,416 297.4,393.6 C305.4,371.2 291.8,352.4 287.8,330.7 C283.8,309 293.8,279 287.8,275.5 C278.2,269.9 276.6,287.4 272.7,309 C268.7,330.7 244,340.5 244,340.5 C244,340.5 232,327.2 218.5,319.5 C205,311.8 168.3,311.1 168.3,311.1 C168.3,311.1 131.6,311.8 118.1,319.5 C104.6,327.2 92.6,340.5 92.6,340.5 C92.6,340.5 67.9,330.7 63.9,309 C59.9,287.3 58.3,269.9 48.8,275.5 C42.8,279 52.8,309 48.8,330.7 C44.8,352.4 31.3,371.2 39.2,393.6 C47.2,416 52.7,442.5 52.7,453.7 C71.8,464.3 115.4,485.1 174.2,483.6 C226.2,482.3 264.9,464.2 283.8,453.7 L283.8,453.7 Z M216.8,360.7 C205.6,374.7 168.2,372.6 168.2,372.6 C168.2,372.6 130.7,374.7 119.6,360.7 C108.4,346.7 161.8,361.4 168.2,344.6 C174.6,361.4 228,346.8 216.8,360.7 L216.8,360.7 Z" id="XMLID_13_" />
                  <g id="Glasses" transform="translate(69.000000, 203.000000)">
                    <path d="M186.4,0.8 L120,0.8 C113.5,0.8 108.2,6.1 108.2,12.6 L108.2,17.3 C105,14.5 102,13 99.3,13 C96.6,13 93.6,14.4 90.4,17.3 L90.4,12.6 C90.4,6.1 85.1,0.8 78.6,0.8 L12.2,0.8 C5.7,0.8 0.4,6.1 0.4,12.6 L0.4,39.6 C0.4,46.1 5.7,51.4 12.2,51.4 L78.6,51.4 C85.1,51.4 90.4,46.1 90.4,39.6 L90.4,25.5 C93.1,22.2 97,18.7 99.3,18.7 C101.5,18.7 105.5,22.1 108.2,25.5 L108.2,39.6 C108.2,46.1 113.5,51.4 120,51.4 L186.4,51.4 C192.9,51.4 198.2,46.1 198.2,39.6 L198.2,12.6 C198.2,6.1 192.9,0.8 186.4,0.8 L186.4,0.8 Z M84.6,39.6 C84.6,43 81.8,45.7 78.5,45.7 L12.1,45.7 C8.7,45.7 6,42.9 6,39.6 L6,12.6 C6,9.2 8.8,6.5 12.1,6.5 L78.5,6.5 C81.9,6.5 84.6,9.3 84.6,12.6 L84.6,39.6 L84.6,39.6 L84.6,39.6 Z M192.5,39.6 C192.5,43 189.7,45.7 186.4,45.7 L120,45.7 C116.6,45.7 113.9,42.9 113.9,39.6 L113.9,12.6 C113.9,9.2 116.7,6.5 120,6.5 L186.4,6.5 C189.8,6.5 192.5,9.3 192.5,12.6 L192.5,39.6 L192.5,39.6 Z" id="XMLID_9_" />
                  </g>
                  <path d="M60.9,142 C59.5,150.4 58.4,259.9 52.4,268.9 C46.3,277.9 11.9,164.5 17.9,109.2 C18.9,100.2 3.6,112.3 0.6,125.3 C0.6,125.3 -0.6,90.3 27.9,82.2 C27.9,82.2 26.7,40.3 60.2,18.1 C60.2,18.1 58.2,32.1 58.3,40.1 C58.3,40.1 101.9,-5.1 202.9,1.4 C303.9,7.9 347.2,96.6 347.2,96.6 C347.2,96.6 336,85.7 327.8,84.8 C327.8,84.8 303.3,243.8 284.9,263.8 C274.8,274.8 289.6,179.9 277.2,158 C264.8,136.1 121.9,103.8 108.6,106.9 C95.4,109.9 62.9,130 60.9,142 L60.9,142 Z" id="XMLID_6_" />
                </g>
              </svg>
            </div>
            <div className={styles.github}>
              <strong><ReactGA.OutboundLink
                eventLabel="RUF - Github"
                to="https://github.com/Skilgarriff/react-user-focus"
              >
                <h3>Github for Demo</h3>
              </ReactGA.OutboundLink></strong>
              <strong><ReactGA.OutboundLink
                eventLabel="RUF Website - Github"
                to="https://github.com/Skilgarriff/SeanKilgarriff.com"
              >
                <h3>Github for this Website</h3>
              </ReactGA.OutboundLink></strong>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default ReactUserFocusDemo;
