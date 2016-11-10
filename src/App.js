// @flow
/* eslint max-len: ["error", 120]*/
/* eslint no-constant-condition: 0*/

import React from 'react';

import style from './App.css';

export default const App = () => {

  // Else we render the traditional things. We can probably remove loading from the NavBar
  return (
    <div className={style.wrapper}>
        <div className={style.main}>
          {children}
        </div>
    );
};
