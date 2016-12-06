// @flow

import React from 'react';

import Face from '../../Components/Face';

import styles from './Home.css';

const Home = () =>
   (
     <div>
       <div className={styles.container}>
         <Face
           linked
         />
       </div>
     </div>
    );

export default Home;
