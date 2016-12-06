import React from 'react';
import ReactGA from 'react-ga';
import Title from 'react-title-component';

import styles from './Newsletter.css';


import Navigation from '../../Components/Navigation';

const Copyright = () =>
   (
     <div className={styles.wrapper}>
       <Title render="Newsletter | Sean Kilgarriff" />
       <Navigation />

       <main className={styles.container}>
         <div className={styles.content}>
           <h1>My Newsletter</h1>
           <p>If you want to get a personal newsletter from me every month signup now!</p>
           <p>
            This newsletter is going to sent on the first of every month
            starting January 1st 2017
           </p>
           <strong><ReactGA.OutboundLink
             eventLabel="Newsletter"
             to="http://eepurl.com/crdImv"
           >Sign Up Now!</ReactGA.OutboundLink></strong>
         </div>
       </main>
     </div>
  )
;

export default Copyright;
