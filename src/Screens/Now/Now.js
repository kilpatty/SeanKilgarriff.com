import React from 'react';
import ReactGA from 'react-ga';
import Title from 'react-title-component';


import styles from './Now.css';

import Navigation from '../../Components/Navigation';

const Now = () =>
   (
     <div>
       <Title render="Now | Sean Kilgarriff" />
       <Navigation />

       <main className={styles.container}>
         <div className={styles.content}>
           <p>
             Hey everyone! Welcome to my Now page! This is a pretty cool concept created by Derek
             Sivers over at <strong><ReactGA.OutboundLink
               eventLabel="NowNowNow"
               to="https://nownownow.com"
             >nownownow.com</ReactGA.OutboundLink></strong>.
             It lets anyone who is visiting my website know what
             I&#39;m currently up to.
          </p>
           <h1>
            What I&#39;m currently working on:
           </h1>
           <h2>
            Leadpages
           </h2>
           <p>
            As of January, I am <strong><ReactGA.OutboundLink
              eventLabel="Leadpages-Now"
              to="https://leadpages.net"
            >Leadpages&#39; </ReactGA.OutboundLink></strong> new Site Reliability Engineer.
             I will maintaining and building their CI/CD pipeline as well as transitioning
             services to Kubernetes. I am extremely excited to be working for a such a great
             company with a great culture!
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
           <h2>Traveling & Open Source</h2>
           <p>
              I am currently traveling to as many places as I can, while also
              doing some open source projects on the side.
              If you want to follow me on my travels, checkout my
              <strong><ReactGA.OutboundLink
                eventLabel="Instagram-Now"
                to="https://www.instagram.com/skilgarriff/"
              > Instagram</ReactGA.OutboundLink></strong>, where I will regularly
              post photos of where I am. If you want to see some of the projects I&#39;m
              currently working on, head over to my <strong><ReactGA.OutboundLink
                eventLabel="Github-Now"
                to="https://github.com/Skilgarriff"
              > Github</ReactGA.OutboundLink></strong>.

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
