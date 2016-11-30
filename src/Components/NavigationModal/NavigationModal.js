import React from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router';

import styles from './NavigationModal.css';


const NavigationModal = ({ onClick }) =>
   (
     <div
       className={styles.modal}
     >
       <button onClick={onClick} className={styles.close} />

       <Link
         className={styles.glassesLink}
         to="/"
       >
         <h1>Home</h1>
       </Link>
       <ReactGA.OutboundLink
         eventLabel="Blog-Face"
         to="https://blog.seankilgarriff.com"
       >
         <h1>Blog</h1>
       </ReactGA.OutboundLink>
       <Link
         className={styles.beardLink}
         to="/About"
       >
         <h1>About</h1>
       </Link>
       <Link
         className={styles.hairLink}
         to="/Contact"
       >
         <h1>Contact</h1>
       </Link>
     </div>
  )
;

NavigationModal.propTypes = {
  onClick: React.PropTypes.func,
};


export default NavigationModal;
