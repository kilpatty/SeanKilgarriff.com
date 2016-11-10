import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import ReactGA from 'react-ga';

// Screens


//
// 404
//

import NotFound from './Shared/NotFound';

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

// Main Render Statement.
render(
  <Provider store={store}>
    <Router history={history} onUpdate={logPageView}>
      <Route path="/" component={App} onEnter={requireAuth}>
        <IndexRoute component={CheckPhone} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>,
document.getElementById('app')
);
