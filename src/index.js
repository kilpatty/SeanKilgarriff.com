import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import ReactGA from 'react-ga';
import ifvisible from 'ifvisible.js';
import * as ReactUserFocus from 'react-user-focus';

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


// Accept hot module reloading during development
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept();
  }
}

// Initialize Google Analytics
ReactGA.initialize(process.env.GA_ID);

console.log(process.env.GA_ID);

// Log Page View Function
function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

function devtoolsWelcome() {
  setTimeout(console.log.bind(console, 'Hey there!'), 0);
  setTimeout(console.log.bind(console, 'Welcome to my website! :)'), 0);
  setTimeout(console.log.bind(console, 'Since you are reading this you are probably a developer'), 0);
  setTimeout(console.log.bind(console, 'I have some cool functions that you might be interested in!'), 0);
  setTimeout(console.log.bind(console, 'Call help() in the console to see what you can do!'), 0);
}

window.help = function () {
  console.log('Curious how long you\'ve been browsing? Call howLongHaveIBeenHere()');
  console.log('Need a breather? Call helpMeRelax()');
  console.log('Want to check out my Resume? Call resume()');
  console.log('Want to see the status of this website? Call status()');
  console.log('Want to see the code on Github? Call letMeSeeThisCode()');
  console.log('Check out the Heatmap of your current session! Call heatMap()');
  console.log('Want to say hi? Call sayHi(\'name\', \'email\', \'message\' )');

  return '-----------------------------------------';
};

window.howLongHaveIBeenHere = function () {
  console.log('Work in Progress!');
  return '-----------------------------------------';
};

window.helpMeRelax = function () {
  console.log('Work in Progress!');
  return '-----------------------------------------';
};

window.resume = function () {
  console.log('Work in Progress!');
  return '-----------------------------------------';
};

window.status = function () {
  console.log('Work in Progress!');
  return '-----------------------------------------';
};

window.letMeSeeThisCode = function () {
  console.log('Work in Progress!');
  return '-----------------------------------------';
};

window.heatMap = function () {
  console.log('Work in Progress!');
  return '-----------------------------------------';
};

window.sayHi = function () {
  console.log('Work in Progress!');
  return '-----------------------------------------';
};

ifvisible.on('blur', () => {
    // example code here..
  console.log('hidden');
});

console.log(`
  MMMMMMMMMWNKOdl:;,''''''';:lx0NWMMMMMMMM
  MMMMN0KXOdc;'...............',:oOXWMMMMM
  MMWKl,;;'........................;oONMMM
  MMXl...............................'cONM
  MNk,.................................,dX
  0l,..................................;xK
  x:.......;ldxxdolc;,''...............lXM
  Xd'...'ckXWMMMMMMWNKK0Oxol:,'.......,xWM
  Wx,...oNMMMMMMMMMMMMMMMMMWNKOxl;....:0MM
  WO;..'xWMMMMMMMMMMMMMMMMMMMMMMWXo'.'oNMM
  MXc..'kMMMMMMMMMMMMMMMMMMMMMMMMMO,.,OWMM
  MWx'.,kWNXXXXXXXXNMWWNXXXXXXXXNW0;.lXMMM
  MMK:.;k0OKKKKKKKOk0Oxk0KKKKKK0OXO;,kWMMM
  MMWx,:OO0MMMMMMMKkOkoOWMMMMMMN0KO;lXMMMM
  MMMXllKK0KKKKKKKO0NX000KKKKKK00XOlOMMMMM
  MMMM0ONMWNNNNNNNNWMMMWNNNNNNNNWMXKWMMMMM
  MMMMKd0MMMMMMMMMMMMMMMMMMMMMMMMNxxNMMMMM
  MMMMKcoNMMMMMMWWNNNNNNNWMMMMMMM0:oNMMMMM
  MMMMKc;xNMMNOdlc::;:::clox0WMWXo'dWMMMMM
  MMMM0;.'cxd:'.............,lxd:..lXMMMMM
  MMMNo........;oddxOOkxddl,.......,kWMMMM
  MMM0;........;ldxxxxxxxoc,........lXMMMM
  MMM0;.............................lXMMMM
  MMMNd'...........................,kWMMMM
  MMMM0:...........................lXMMMMM
  MMMMNo..........................,kWMMMMM
  MMMMMKdc;'...................,;lkNMMMMMM
  MMMMMWNNX0kdolc:;;;;;;;:cldxOKXNNWMMMMMM
  MMMMWkccldk0XNNNNXXXXNNNWWX0kdlcckNMMMMM
  MMMM0:.....';lxKWMMMMMWXkl;'.....;OMMMMM
  MMMWx'.........,ldxxxdl;..........dWMMMM
  MMMNd'............................lXMMMM
  MMMNd'............................oNMMMM
  MMMMk,........';okOOOkd:'........'xWMMMM
  MMMMKc....',:oOXWMMMMMWNOdc,'....:0MMMMM
  MMMMWk,,:lx0NWMMMMMMMMMMMWNKxl:,,dNMMMMM
`);

devtoolsWelcome();

// const MatchWithProps = ({ component: Comp, passProps, ...props }) => (
//   <Match {...props} render={(matchedProps) => <Comp {...passProps} {...matchedProps} />} />
// );

// <MatchWithProps pattern="/foo" component={Foo} passProps={{ bar: 1 }} />

function onChange(isHidden) {
  console.log(isHidden);
}

render(
  <BrowserRouter onUpdate={logPageView}>
    <div className={styles.container}>
      <div className={styles.content}>
        <ReactUserFocus />
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
