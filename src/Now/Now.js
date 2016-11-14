import React from 'react';
import ReactGA from 'react-ga';


import styles from './Now.css';

import Navigation from '../Navigation';

const Now = () =>
   (
     <div>
       <Navigation />

       <main className={styles.container}>
         <div className={styles.content}>
           <p>
             Hey everyone! Welcome to my now page! This is a pretty cool concept created by Derek
             Sivers over at <strong><ReactGA.OutboundLink
               eventLabel="NowNowNow"
               to="nownownow.com"
             >nownownow.com</ReactGA.OutboundLink></strong>.
             It lets anyone who is visiting my website know what
             I&#39;m currently up to.
          </p>
           <p>
            What I&#39;m currently working on:
          </p>
           <p>
            Freelancing
          </p>
           <p>
            Blogging @ blog.seankilgarriff.com
          </p>
           <p>
            Blogging at Casual Mastery
          </p>
           <p>
            If you want to know more about the now page head on over to
             <strong><ReactGA.OutboundLink
               eventLabel="NowNowNow"
               to="nownownow.com/about"
             > nownownow.com/about</ReactGA.OutboundLink></strong> to learn more.
         </p>
         </div>
       </main>
     </div>
  )
;

export default Now;
