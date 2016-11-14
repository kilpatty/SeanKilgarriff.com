import React from 'react';

import ReactGA from 'react-ga';
import styles from './Copyright.css';


import Navigation from '../Navigation';

const Copyright = () =>
   (
     <div>
       <Navigation />

       <main className={styles.container}>
         <div className={styles.content}>
           <p>
           This website is handmade by Sean Kilgarriff, and
           I would really appreciate you not stealing it!
          </p>
           <p>
            This entire website is licensed under a <strong><ReactGA.OutboundLink
              eventLabel="MIT License"
              to="https://github.com/Skilgarriff/SeanKilgarriff.com/blob/master/LICENSE.md"
            >MIT License</ReactGA.OutboundLink></strong>.
            All blog content and  videos are covered by licensed under a <strong>
              <ReactGA.OutboundLink
                eventLabel="CC License"
                to="https://creativecommons.org/licenses/by/4.0/"
              >Creative Commons
            Attribution 4.0 International License</ReactGA.OutboundLink></strong>.
          </p>
           <p>
           Everything on this website is located on <strong><ReactGA.OutboundLink
             eventLabel="Github from Copyright"
             to="https://github.com/Skilgarriff/SeanKilgarriff.com/"
           >Github</ReactGA.OutboundLink></strong>. Feel free to check it out and let me
           know about any errors or typos!
         </p>
         </div>
       </main>
     </div>
  )
;

export default Copyright;
