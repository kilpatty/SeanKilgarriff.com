import React from 'react';

import { Link } from 'react-router';

const Contact = () =>
   (
     <div>
       <nav>
         <Link to="/">
            Logo
         </Link>
       </nav>

       <main>
         <div className="content">
           <p>
           Contact me! My PGP Fingerprint: F1E3 83C6 264E 87FF BD96  BD68 AD1E A0DB F797 68BC
          </p>
         </div>
       </main>
     </div>
  )
;

export default Contact;
