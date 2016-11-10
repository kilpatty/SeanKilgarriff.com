import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router';
import ReactGA from 'react-ga';

// Screens
import Home from './Home';

// Components
import Footer from './Footer';

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

console.log(`%c
 __      __        __
/  \    /  \ ____ |  |   ____  ____   _____   ____
\   \/\/   // __ \|  | _/ ___\/  _ \ /     \_/ __ \
 \        /\  ___/|  |_\  \__(  <_> )  Y Y  \  ___/
  \__/\  /  \___  >____/\___  >____/|__|_|  /\___  >
       \/       \/          \/            \/     \/
`);

console.log(`%c ________________________________________
< mooooooooooooooooooooooooooooooooooooo >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`, 'font-family:monospace');

// Main Render Statement. <IndexRoute component={CheckPhone} />
// <Route path="*" component={NotFound} />
render(
  <BrowserRouter onUpdate={logPageView}>
    <div>
      <div>
        Hey
      </div>
      <Match exactly pattern="/" component={Home} />
      <Footer />
    </div>
  </BrowserRouter>,
document.getElementById('app')
);
