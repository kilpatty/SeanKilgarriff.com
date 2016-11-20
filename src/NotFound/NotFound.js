import React from 'react';

import styles from './NotFound.css';

import Navigation from '../Navigation';

const NotFound = () =>
   (
     <div className={styles.wrapper}>
       <Navigation />

       <main className={styles.container}>
         <div className={styles.content}>
           Oops! Nothing here :)
         </div>
       </main>
     </div>
  )
;

export default NotFound;
