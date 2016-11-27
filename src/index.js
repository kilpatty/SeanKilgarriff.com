import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import ReactGA from 'react-ga';
import ReactUserFocus from 'react-user-focus';

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

// Console functions
import { devtoolsWelcome, setWindowFunctions } from './console.js';


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


setWindowFunctions();
devtoolsWelcome();

// const MatchWithProps = ({ component: Comp, passProps, ...props }) => (
//   <Match {...props} render={(matchedProps) => <Comp {...passProps} {...matchedProps} />} />
// );

// <MatchWithProps pattern="/foo" component={Foo} passProps={{ bar: 1 }} />

function onFocusChange(isHidden) {
  console.log(`Is hidden?:${isHidden}`);
}

function onIdleChange(isIdle) {
  console.log(`Is Idle?:${isIdle}`);
}
render(
  <BrowserRouter onUpdate={logPageView}>
    <div className={styles.container}>
      <div className={styles.content}>
        <ReactUserFocus
          onFocusChange={onFocusChange}
          onIdleChange={onIdleChange}
          idleTime={2}
        />
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/Copyright" component={Copyright} />
        <Match pattern="/Now" component={Now} />
        <Match pattern="/Contact" component={Contact} />
        <Match pattern="/Portfolio" component={Portfolio} />
        <Match pattern="/About" component={About} />
        <Miss component={NotFound} />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  </BrowserRouter>,
document.getElementById('app')
);
