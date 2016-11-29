import React from 'react';
import Title from 'react-title-component';


import styles from './NotFound.css';

import Navigation from '../Navigation';

const NotFound = () =>
   (
     <div className={styles.wrapper}>
       <Title render={previousTitle => `404 | ${previousTitle}`} />
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
