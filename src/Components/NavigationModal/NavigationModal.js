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
         activeClassName={styles.active}
         to="/About"
       >
         <h1>About</h1>
       </Link>
       <Link
         activeClassName={styles.active}
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
