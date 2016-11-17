import React from 'react';

import styles from './About.css';

import Navigation from '../Navigation';

const About = () =>
   (
     <div>
       <Navigation />

       <main className={styles.container}>
         <div className={styles.content} />
         hey
       </main>
     </div>
  )
;

export default About;
