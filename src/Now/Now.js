import React from 'react';

import { Link } from 'react-router';

import styles from './Now.css';

import Face from '../Face';

const Now = () =>
   (
     <div>
       <nav className={styles.logo}>
         <Link to="/">
           <Face />
         </Link>
       </nav>

       <main>
         <div className="content">
           <p>
          Hey everyone! Welcome to my now page! This is a pretty cool concept created by Derek
          Sivers over at nownownow.com. It lets anyone who is visiting my website know what
          I&#39;m currently up to. If you want to know more about the now page head on over to
          Nownownow.com/about to learn more.
          What I&#39;m currently working on:
         </p>
         </div>
       </main>
     </div>
  )
;

export default Now;
