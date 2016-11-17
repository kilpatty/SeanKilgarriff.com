import React from 'react';
import { Link } from 'react-router';


import styles from './About.css';

import Navigation from '../Navigation';

const About = () =>
   (
     <div className={styles.wrapper}>
       <Navigation />

       <main className={styles.container}>
         <div className={styles.content}>
           <h1>Who I Am</h1>
           <p>
             Hey there! Welcome to my website. Glad to have you! My name is
             Sean Kilgarriff. For work I primarily design and develop websites,
            but I dabble in a lot of things. I am a coffee fanatic, and I am an
            avid traveler.
          </p>
           <p>
            This is my personal website. I did not design this like I would a typical website.
            There are a lot of hidden gems, so look around and enjoy the adventure!
          </p>
           <div className={styles.threeSelections}>
             <p>
               <strong><Link to="/Portfolio">Portfolio</Link></strong>
             </p>
             <p>
               <strong><Link to="/Now">What I&#39;m Doing Now</Link></strong>
             </p>
             <p>
               <strong><Link to="/Contact">Contact Me</Link></strong>
             </p>
           </div>


         </div>
       </main>
     </div>
  )
;

export default About;
