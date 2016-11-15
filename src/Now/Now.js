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
           <h2>Freelancing & Traveling</h2>
           <p>
              I am currently traveling to as many places as I can, while also
              doing some freelancing projects on the side.
              If you want to follow me on my travels, checkout my
              <strong><ReactGA.OutboundLink
                eventLabel="Instagram-Now"
                to="https://www.instagram.com/skilgarriff/"
              > Instagram</ReactGA.OutboundLink></strong>, where I will regularly
              post photos of where I am.
           </p>
           <h2>Blogging On This Site!</h2>
           <p>
             Over the past few years, I
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
