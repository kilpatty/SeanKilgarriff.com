import React from 'react';
import Title from 'react-title-component';
import ReactGA from 'react-ga';


import styles from './NotFound.css';

import Navigation from '../Navigation';

const NotFound = () =>
   (
     <div className={styles.wrapper}>
       <Title render={previousTitle => `404 | ${previousTitle}`} />
       <Navigation />

       <main className={styles.container}>
         <div className={styles.content}>
           <h1>Oops....</h1>
           <p>Looks like you have stumbled somewhere that does not exist.</p>
           <p>Try clicking on my face to find your way back :).</p>
           <p>If you find your way here again, and think I messed up, open up
           an issue on the <strong><ReactGA.OutboundLink
             eventLabel="404 - Github"
             to="https://github.com/Skilgarriff/SeanKilgarriff.com/issues"
           >repository</ReactGA.OutboundLink></strong> for this website.</p>
         </div>
       </main>
     </div>
  )
;

export default NotFound;
