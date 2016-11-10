import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router';
import ReactGA from 'react-ga';

// Screens
import Home from './Home';

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

// Main Render Statement. <IndexRoute component={CheckPhone} />
// <Route path="*" component={NotFound} />
render(
  <BrowserRouter onUpdate={logPageView}>
    <div>
      <div>
        Hey
      </div>
      <Match exactly pattern="/" component={Home} />
    </div>
  </BrowserRouter>,
document.getElementById('app')
);
