import React from 'react';
import Title from 'react-title-component';


import styles from './Portfolio.css';

import Navigation from '../../Components/Navigation';

const Portfolio = () =>
   (
     <div className={styles.wrapper}>
       <Title render="Portfolio | Sean Kilgarriff" />
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
