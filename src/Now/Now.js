import React from 'react';

import { Link } from 'react-router';

const Now = () =>
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
          Sean is currently working on building <a href="https://zzrot.com">ZZROT Web Design</a> and <a href="http://growninnyc.com">Grown In NYC</a>!
         </p>
         </div>
       </main>
     </div>
  )
;

export default Now;
