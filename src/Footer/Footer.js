// @flow

import React from 'react';

import FontAwesome from 'react-fontawesome';

//  <span className="fa-stack fa-lg">
//    <i className="fa fa-circle fa-stack-2x" />
//    <i className="fa fa-medium fa-stack-1x fa-inverse" />
//  </span>

const Footer = () =>
   (
     <footer>
       <div className="social">
         <a href="https://medium.com/@SKilgarriff" target="_blank">
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
         </a>
         <a href="https://www.facebook.com/skilgarriff" target="_blank">
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
               name="facebook"
               inverse
               stack="1x"
             />
           </FontAwesome>
         </a>
         <a href="https://twitter.com/SeanKilgarriff" target="_blank">
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
         </a>
         <a href="mailto:sean@zzrot.com">
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
         <a href="https://github.com/Skilgarriff" target="_blank">
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
         </a>
         <a href="https://www.linkedin.com/in/seankilgarriff" target="_blank">
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
         </a>
         <a href="https://www.instagram.com/skilgarriff/" target="_blank">
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
         </a>
       </div>
       <div className="copyright">
         <a href="https://seankilgarriff.com/copyright">
           <p>
                   &copy; Sean Kilgarriff 2016
               </p>
         </a>
         <a href="https://seankilgarriff.com/pgp" id="PGP">
           <p>
            PGP Key
          </p>
         </a>
       </div>
     </footer>
    );

export default Footer;
