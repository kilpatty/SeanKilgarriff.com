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
             Hey there! Welcome to my website. Glad to have you! My name is
             Sean Kilgarriff. For work I primarily design and develop websites,
            but I dabble in a lot of things. I am a coffee fanatic, and I am an
            avid traveler.

            This is my personal website. I did not design this like I would a typical website.
            There are a lot of hidden gems, so look around and enjoy the adventure!

            If you want to find out what I am currently up to, then check out my Now page.

            Contact Me

           </p>

         </div>
       </main>
     </div>
  )
;

export default About;
