import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Miss } from 'react-router';
import ReactGA from 'react-ga';
import ReactUserFocus from 'react-user-focus';
import Title from 'react-title-component';

// This files styles - need to import before anything else to get the css first.
import styles from './index.css';

// Screens
import Home from './Home';
import Copyright from './Copyright';
import Now from './Now';
import Footer from './Footer';
import Contact from './Contact';
import Portfolio from './Portfolio';
import About from './About';
import NotFound from './NotFound';

import GAMatch from './GAMatch';

// Console functions
import { devtoolsWelcome, setWindowFunctions, onFocusChange, onIdleChange } from './console.js';


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

// Set all console/window functions
setWindowFunctions();

// Initiate the welcome message in console.
devtoolsWelcome();


render(
  <BrowserRouter onUpdate={logPageView}>
    <div className={styles.container}>
      <div className={styles.content}>
        <Title render="Sean Kilgarriff" />
        <ReactUserFocus
          onFocusChange={onFocusChange}
          onIdleChange={onIdleChange}
          idleTime={2}
        />
        <GAMatch exactly pattern="/" component={Home} />
        <GAMatch pattern="/Copyright" component={Copyright} />
        <GAMatch pattern="/Now" component={Now} />
        <GAMatch pattern="/Contact" component={Contact} />
        <GAMatch pattern="/Portfolio" component={Portfolio} />
        <GAMatch pattern="/About" component={About} />
        <Miss component={NotFound} />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  </BrowserRouter>,
document.getElementById('app')
);
