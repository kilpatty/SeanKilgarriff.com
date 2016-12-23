import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Miss } from 'react-router';
import ReactGA from 'react-ga';
import ReactUserFocus from 'react-user-focus';
import Title from 'react-title-component';
import Perf from 'react-addons-perf';


// This files styles - need to import before anything else to get the css first.
import styles from './index.css';

// Screens
import Home from './Screens/Home';
import Copyright from './Screens/Copyright';
import Now from './Screens/Now';
import Footer from './Components/Footer';
import Contact from './Screens/Contact';
import Portfolio from './Screens/Portfolio';
import About from './Screens/About';
import NotFound from './Screens/NotFound';
import Newsletter from './Screens/Newsletter';

// Demos
import ReactUserFocusDemo from './Demos/ReactUserFocusDemo';

import GAMatch from './Components/GAMatch';

// Console functions
import { devtoolsWelcome, setWindowFunctions, onFocusChange, onIdleChange, fingerPrintUser } from './console.js';

window.Perf = Perf;

Perf.start();

// Accept hot module reloading during development
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept();
  }
}

// Initialize Google Analytics
ReactGA.initialize(process.env.GA_ID);

fingerPrintUser();

// Set all console/window functions
setWindowFunctions();

// Initiate the welcome message in console.
devtoolsWelcome();


render(
  <BrowserRouter>
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
        <GAMatch pattern="/Newsletter" component={Newsletter} />
        <GAMatch pattern="/ReactUserFocusDemo" component={ReactUserFocusDemo} />
        <Miss component={NotFound} />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  </BrowserRouter>,
document.getElementById('app'),
);
