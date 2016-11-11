// @flow

import React from 'react';

import Face from '../Face';

import Typed from '../Typed';

import styles from './Home.css';

const Home = () =>
   (
     <div className={styles.container}>
       <Typed />
       <Face />
     </div>
    );

export default Home;
