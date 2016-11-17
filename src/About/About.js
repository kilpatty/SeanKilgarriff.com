import React from 'react';
import ReactGA from 'react-ga';


import styles from './About.css';

import Navigation from '../Navigation';

const About = () =>
   (
     <div>
       <Navigation />

       <main className={styles.container}>
         <div className={styles.content}>
           <h1>Who I Am</h1>
           <p>
             Hey there! Welcome to my website. Glad to have you!
           </p>

         </div>
       </main>
     </div>
  )
;

export default About;
