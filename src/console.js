import ReactGA from 'react-ga';
import Fingerprint2 from 'fingerprintjs2';

const myLogoASCII = `
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
`;

let showFocusVariables = false;
let userFingerprint;
let userFPComponents;

export function devtoolsWelcome() {
  setTimeout(console.log.bind(console, myLogoASCII), 0);
  setTimeout(console.log.bind(console, 'Hey there!'), 0);
  setTimeout(console.log.bind(console, 'Welcome to my website! :)'), 0);
  setTimeout(console.log.bind(console, 'Since you are reading this you are probably a developer'), 0);
  setTimeout(console.log.bind(console, 'I have some cool functions that you might be interested in!'), 0);
  setTimeout(console.log.bind(console, 'Call help() in the console to see what you can do!'), 0);
}

export function setWindowFunctions() {
  window.help = function () {
    console.log('Curious how long you\'ve been browsing? Call howLongHaveIBeenHere()');
    console.log('Need a breather? Call helpMeRelax()');
    console.log('Want to check out my Resume? Call resume()');
    console.log('Want to see the status of this website? Call status()');
    console.log('Want to see the code on Github? Call letMeSeeThisCode()');
    console.log('Check out the Heatmap of your current session! Call heatMap()');
    console.log('Want to say hi? Call sayHi(\'name\', \'email\', \'message\' )');
    console.log('To see whether you are focused or idle, call amIFocused()');
    console.log('Like to see your device fingerprint? call myFingerprint()');

    return '-----------------------------------------';
  };

  // See if I can change idle time dynamically. - this will be hard
  window.amIFocused = function () {
    console.log('You have enabled the react-user-focus demo.');
    console.log('The current idle time is set to 5 seconds.');
    console.log('Call this function again to disable this feature.');
    // Flip the variable of showFocusVariables to decide whether
    // or not to show the user the demo for react-user-focus.
    if (showFocusVariables === true) {
      showFocusVariables = false;
    } else {
      showFocusVariables = true;
    }
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

  window.myFingerprint = function () {
    if (userFingerprint == null) {
      console.log('Your fingerprint has not yet been calculated. Try again in a few seconds.');
    } else {
      console.log(`Your fingerprint is ${userFingerprint}`);
      console.log('This finger print is made up of these components:');
      console.log(userFPComponents);
    }
  };
}

export function onFocusChange(isHidden) {
  if (showFocusVariables === true) {
    if (isHidden === true) {
      console.log('This website is currently hidden!');
      return;
    }
    console.log('Visible!');
  }
}

export function onIdleChange(isIdle) {
  if (showFocusVariables === true) {
    if (isIdle === true) {
      console.log('You are currently Idle!');
      return;
    }
    console.log('Active again!');
  }
}

export function fingerPrintUser() {
  new Fingerprint2().get((result, components) => {
    userFingerprint = result;
    userFPComponents = components;
    ReactGA.set({ userId: result });
  });
}
