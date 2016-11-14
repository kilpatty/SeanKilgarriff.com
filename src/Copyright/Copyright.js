import React from 'react';

import { Link } from 'react-router';
import ReactGA from 'react-ga';
import styles from './Copyright.css';

import Face from '../Face';

const Copyright = () =>
   (
     <div>
       <nav>
         <div className={styles.logo}>
           <Link to="/">
             <Face />
           </Link>
         </div>
       </nav>

       <main>
         <div className={styles.content}>
           <p>
           Everything on this website is handman by Sean Kilgarriff, and
           he would really appreciate you not stealing it!
          </p>
           <p>
            This entire website is covered by the <ReactGA.OutboundLink
              eventLabel="Medium"
              to="https://medium.com/@SKilgarriff"
              className={styles.socialLink}
            >... ... License</ReactGA.OutboundLink>.
            You can read the license on Github, along with all of the other files belonging to this website.
           </p>
         </div>
       </main>
     </div>
  )
;

export default Copyright;
