import React from 'react';

import styles from './Navigation.css';

import LinkedFace from '../LinkedFace';

const Navigation = () =>
   (
     <nav className={styles.logo}>
       <LinkedFace />
     </nav>
  )
;

export default Navigation;

// class Face extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       width: 0,
//       height: 0,
//     };
//     this.updateDimensions = this.updateDimensions.bind(this);
//   }
//
//   componentWillMount() {
//     this.updateDimensions();
//   }
//
//   componentDidMount() {
//     window.addEventListener('resize', this.updateDimensions);
//   }
//
//   componentWillUnmount() {
//     window.removeEventListener('resize', this.updateDimensions);
//   }
//
//   updateDimensions() {
//     const w = window;
//     const d = document;
//     const documentElement = d.documentElement;
//     const body = d.getElementsByTagName('body')[0];
//     const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
//     const height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
//
//     this.setState({ width, height });
//   }
//
//   render() {
//     if {this.width}
//     return <span>{this.state.width} x {this.state.height}</span>;
//   }
//
// }
