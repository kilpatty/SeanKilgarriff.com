// @flow

import React from 'react';

const App = ({ children }) =>
   (
     <div>
       <p>Hey</p>
       {children}
     </div>
    );

App.PropTypes = {
  children: React.PropTypes.node,
};

export default App;
