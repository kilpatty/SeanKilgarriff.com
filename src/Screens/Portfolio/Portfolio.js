import React from 'react';

import styles from './Portfolio.css';

import Navigation from '../../Components/Navigation';

const Portfolio = () =>
   (
     <div className={styles.wrapper}>
       <Navigation />

       <main className={styles.container}>
         <div className={styles.content}>
           Work in Progress
         </div>
       </main>
     </div>
  )
;

export default Portfolio;
