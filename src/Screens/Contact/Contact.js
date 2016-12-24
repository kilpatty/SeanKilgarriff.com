import React from 'react';

import ReactGA from 'react-ga';
import FontAwesome from 'react-fontawesome';
import Title from 'react-title-component';

import Navigation from '../../Components/Navigation';


import styles from './Contact.css';

const Contact = () =>
   (
     <div className={styles.wrapper}>
       <Title render="Contact | Sean Kilgarriff" />
       <Navigation />

       <main className={styles.container}>
         <div className={styles.content}>
           <h1>Contact Me</h1>
           <div className={styles.social}>
             <ReactGA.OutboundLink
               eventLabel="Medium"
               to="https://medium.com/@SKilgarriff"
               className={styles.socialLink}
             >
               <FontAwesome
                 name="stack"
                 size="lg"
               >
                 <FontAwesome
                   name="circle"
                   size="2x"
                   stack="2x"
                 />
                 <FontAwesome
                   name="medium"
                   inverse
                   stack="1x"
                 />
               </FontAwesome>
             </ReactGA.OutboundLink>
             <svg
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 512 512"
               xmlSpace="preserve"
               className={styles.socialLogo}
               pointerEvents="bounding-box"
             >
               <desc>Facebook Logo</desc>
               <g>
                 <ReactGA.OutboundLink
                   eventLabel="Facebook"
                   to="https://www.facebook.com/skilgarriff"
                   className={styles.socialLink}
                 >
                   <path
                     className="st0" d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256S397.4,0,256,0z M353.7,130.4l-35.4,0 c-27.8,0-33.1,13.2-33.1,32.6v42.7h66.2l0,66.9h-66.2v171.6h-69.1V272.5h-57.7v-66.9h57.7v-49.3c0-57.2,35-88.4,86-88.4l51.6,0.1 L353.7,130.4L353.7,130.4z"
                   />
                 </ReactGA.OutboundLink>
               </g>
             </svg>
             <ReactGA.OutboundLink
               eventLabel="Twitter"
               to="https://twitter.com/SeanKilgarriff"
               className={styles.socialLink}
             >
               <FontAwesome
                 name="stack"
                 size="lg"
               >
                 <FontAwesome
                   name="circle"
                   size="2x"
                   stack="2x"
                 />
                 <FontAwesome
                   name="twitter"
                   inverse
                   stack="1x"
                 />
               </FontAwesome>
             </ReactGA.OutboundLink>
             <a
               href="mailto:sean@zzrot.com"
               className={styles.socialLink}
             >
               <FontAwesome
                 name="stack"
                 size="lg"
               >
                 <FontAwesome
                   name="circle"
                   size="2x"
                   stack="2x"
                 />
                 <FontAwesome
                   name="envelope"
                   inverse
                   stack="1x"
                 />
               </FontAwesome>
             </a>
             <ReactGA.OutboundLink
               eventLabel="Github"
               to="https://github.com/Skilgarriff"
               className={styles.socialLink}
             >
               <FontAwesome
                 name="stack"
                 size="lg"
               >
                 <FontAwesome
                   name="circle"
                   size="2x"
                   stack="2x"
                 />
                 <FontAwesome
                   name="github-alt"
                   inverse
                   stack="1x"
                 />
               </FontAwesome>
             </ReactGA.OutboundLink>
             <ReactGA.OutboundLink
               eventLabel="LinkedIn"
               to="https://www.linkedin.com/in/seankilgarriff"
               className={styles.socialLink}
             >
               <FontAwesome
                 name="stack"
                 size="lg"
               >
                 <FontAwesome
                   name="circle"
                   size="2x"
                   stack="2x"
                 />
                 <FontAwesome
                   name="linkedin"
                   inverse
                   stack="1x"
                 />
               </FontAwesome>
             </ReactGA.OutboundLink>
             <ReactGA.OutboundLink
               eventLabel="Instagram"
               to="https://www.instagram.com/skilgarriff/"
               className={styles.socialLink}
             >
               <FontAwesome
                 name="stack"
                 size="lg"
               >
                 <FontAwesome
                   name="circle"
                   size="2x"
                   stack="2x"
                 />
                 <FontAwesome
                   name="instagram"
                   inverse
                   stack="1x"
                 />
               </FontAwesome>
             </ReactGA.OutboundLink>
           </div>
           <p className={styles.pgp}>
           My PGP Fingerprint: F1E3 83C6 264E 87FF BD96  BD68 AD1E A0DB F797 68BC
          </p>
         </div>

       </main>
     </div>
  )
;

export default Contact;
