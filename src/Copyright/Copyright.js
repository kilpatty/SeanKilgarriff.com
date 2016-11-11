import React from 'react';

import { Link } from 'react-router';

const Copyright = () =>
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
           Everything on this website is handman by Sean Kilgarriff, and
           he would really appreciate you not stealing it!
          </p>
         </div>
       </main>
     </div>
  )
;

export default Copyright;
