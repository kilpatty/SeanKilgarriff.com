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
           <h1>
            What I&#39;m currently working on:
           </h1>
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
           <h2>
            Casual Mastery
           </h2>
           <p>
            I&#39;ve always been interested in learning and mastering new things everyday.
            I&#39;ll spend hours reading about Japanese Mud-Ball shaping one day
            (<strong><ReactGA.OutboundLink
              eventLabel="Dorodango-Now"
              to="https://en.wikipedia.org/wiki/Dorodango"
            >Dorodango</ReactGA.OutboundLink></strong> for those interested),
            and then Coffee grown by Monks the next day.
            Casual Mastery is a place where I will post about my adventures in gaining
            a casual mastery over certain subjects.
            </p>
           <h2>Blogging On This Site</h2>
           <p>
             Over the past few years, I have had a lot that I have wanted to write about,
             but I could never find a medium that I was completely satisfied with.
             Creating my own blog has given me a place to write about all things that I
             am interested in whether it&#39;s politics, programming, or just general lifestyle.
             If you want to see my latest posts, head over to my <strong><ReactGA.OutboundLink
               eventLabel="Blog-Now"
               to="https://blog.seankilgarriff.com"
             > blog</ReactGA.OutboundLink></strong> and signup for my newsletter!
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
