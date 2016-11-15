import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import ReactGA from 'react-ga';

// This files styles - need to import before anything else to get the css first.
import styles from './index.css';

// Screens
import Home from './Home';
import Copyright from './Copyright';
import Now from './Now';
import Footer from './Footer';
import Contact from './Contact';
import NotFound from './NotFound';


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

function devtoolsWelcome() {
  console.log('Hey there!');
  console.log('Welcome to my website! :)');
  console.log('Since you are reading this you are probably a developer');
  console.log('I have some cool functions that you might be interested in!');
  console.log('Call help() in the console to see everything you can call!');
}

window.help = function () {
  console.log('Curious how long you\'ve been browsing? Call howLongHaveIBeenHere()');
  console.log('Need a breather? Call helpMeRelax()');
  console.log('Want to check out my Resume? Call resume()');
  console.log('Want to see the status of this website? Call status()');
  console.log('Want to see the code on Github? Call letMeSeeThisCode()');
  console.log('Check out the Heatmap of your current session! Call heatMap()');
};

window.howLongHaveIBeenHere = function () {
  console.log('Work in Progress!');
};

window.helpMeRelax = function () {
  console.log('Work in Progress!');
};

window.resume = function () {
  console.log('Work in Progress!');
};

window.status = function () {
  console.log('Work in Progress!');
};

window.letMeSeeThisCode = function () {
  console.log('Work in Progress!');
};

window.heatMap = function () {
  console.log('Work in Progress!');
};

devtoolsWelcome();

render(
  <BrowserRouter onUpdate={logPageView}>
    <div className={styles.container}>
      <div className={styles.content}>
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/copyright" component={Copyright} />
        <Match pattern="/now" component={Now} />
        <Match pattern="/contact" component={Contact} />
        <Miss component={NotFound} />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  </BrowserRouter>,
document.getElementById('app')
);
