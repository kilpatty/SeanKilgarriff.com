import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router';
import ReactGA from 'react-ga';

// This files styles - need to import before anything else to get the css first.
import styles from './index.css';

// Screens
import Home from './Home';
import Copyright from './Copyright';

//
// 404
//


// Accept hot module reloading during development
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept();
  }
}

// Initialize Google Analytics
ReactGA.initialize(process.env.GA_ID);

// Log Page View Function
function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

render(
  <BrowserRouter onUpdate={logPageView}>
    <div className={styles.container}>
      <p>hello</p>
      <Match exactly pattern="/" component={Home} />
      <Match pattern="/copyright" component={Copyright} />
    </div>
  </BrowserRouter>,
document.getElementById('app')
);
