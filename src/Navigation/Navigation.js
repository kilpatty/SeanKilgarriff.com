import React from 'react';
import Sidebar from 'react-sidebar';


import styles from './Navigation.css';

import Face from '../Face';

// const Navigation = () =>
//    (
//      <nav className={styles.logo}>
//        <LinkedFace />
//      </nav>
//   )
// ;
//
// export default Navigation;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      sidebarOpen: false,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
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

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
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

  // <Sidebar
  //   sidebar={sidebarContent}
  //   open={this.state.sidebarOpen}
  //   onSetOpen={this.onSetSidebarOpen}
  // />

  render() {
    if (this.state.width < 500) {
      return (
        <nav className={styles.logo}>
          <Face
            onClick={this.onSetSidebarOpen}
          />

        </nav>
      );
    }
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
