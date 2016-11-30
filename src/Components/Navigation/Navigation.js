import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import styles from './Navigation.css';

import Face from '../Face';
import NavigationModal from '../NavigationModal';


class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      modalOpen: false,
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
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
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
          <ReactCSSTransitionGroup
            transitionName={{
              enter: styles.enter,
              enterActive: styles.enterActive,
              leave: styles.leave,
              leaveActive: styles.leaveActive,
            }}
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            {this.state.modalOpen ? <NavigationModal onClick={this.closeModal} /> : null}
          </ReactCSSTransitionGroup>
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
