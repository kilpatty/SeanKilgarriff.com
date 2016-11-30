import React from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router';

import styles from './Navigation.css';

import Face from '../Face';


class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      modelOpen: false,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  openModal() {
    this.setState({ modelOpen: true });
  }

  closeModal() {
    this.setState({ modelOpen: false });
  }

  updateDimensions() {
    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName('body')[0];
    const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    const height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

    this.setState({ width, height });
  }

  render() {
    if (this.state.width < 500) {
      return (
        <nav className={styles.logo}>
          <Face
            onClick={this.openModal}
          />
          <div
            className={this.state.modelOpen ? styles.openModal : styles.closedModal}
          >
            <button onClick={this.closeModal} className={styles.close} />

            <Link
              className={styles.glassesLink}
              to="/"
            >
              <h1>Home</h1>
            </Link>
            <ReactGA.OutboundLink
              eventLabel="Blog-Face"
              to="https://blog.seankilgarriff.com"
            >
              <h1>Blog</h1>
            </ReactGA.OutboundLink>
            <Link
              className={styles.beardLink}
              to="/About"
            >
              <h1>About</h1>
            </Link>
            <Link
              className={styles.hairLink}
              to="/Contact"
            >
              <h1>Contact</h1>
            </Link>
          </div>
        </nav>

      );
    }
    // Make sure that the modal is always closed if above 500px
    return (
      <nav className={styles.logo}>
        <Face
          linked
        />
      </nav>
    );
  }
}

export default Navigation;
