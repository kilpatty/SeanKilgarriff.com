/* eslint no-underscore-dangle: 0 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ReactGA from 'react-ga';

//
// REDUCERS
//

import { sessionReducer, checkTransactionAttempt } from './App/AppActions';
import { authorizationReducer } from './Authorization/AuthorizationActions.js';
import { checkPhoneReducer } from './Checkout/CheckPhone/CheckPhoneActions.js';
import { reviewReducer } from './Checkout/Review/ReviewActions.js';
import { otpReducer } from './Signup/Otp/OtpActions';
import { profileReducer } from './Signup/Profile/ProfileActions';
import { pinReducer } from './Signup/Pin/PinActions';
import { bankLoginReducer } from './Shared/BankLogin/BankLoginActions';
import { bankSelectionReducer } from './Shared/BankSelection/BankSelectionActions';
import { pinOTPReducer } from './PinReset/Otp/OtpActions';

//
// CHECKOUT
//

import App from './App';
import CheckPhone from './Checkout/CheckPhone';
import Otp from './Checkout/Otp';
import Pin from './Checkout/Pin';
import Review from './Checkout/Review';

//
// SIGNUP
//

import SignupOtp from './Signup/Otp';
import SignupProfile from './Signup/Profile';
import SignupPin from './Signup/Pin';

//
// SHARED
//
import BankLogin from './Shared/BankLogin';
import BankSelection from './Shared/BankSelection';

//
// PINRESET
//
import PinResetOtp from './PinReset/Otp';
import PinResetBankLogin from './PinReset/BankLogin';

//
// 404
//
import NotFound from './Shared/NotFound';

//
// Utils
//
import getFingerprint from './fingerprint';


// Accept hot module reloading during development
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept();
  }
}

// We combine the reducers here so that they
// can be left split apart above
const checkoutApp = combineReducers({
  checkPhone: checkPhoneReducer,
  session: sessionReducer,
  authorization: authorizationReducer,
  otp: otpReducer,
  profile: profileReducer,
  pin: pinReducer,
  review: reviewReducer,
  bankSelection: bankSelectionReducer,
  bankLogin: bankLoginReducer,
  pinOtp: pinOTPReducer,
  routing: routerReducer,
});


// This allows us to use the Redux Dev tools :) //MOVE TO DEVELOPMENT ONLY WHEN GOING LIVE.
const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
         // Specify here name, actionsBlacklist, actionsCreators and other options
     }) : compose;

const routerMiddle = routerMiddleware(browserHistory);

const enhancer = composeEnhancers(
     applyMiddleware(thunkMiddleware),
     applyMiddleware(routerMiddle)
   );

const store = createStore(checkoutApp, enhancer);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

// Initialize Google Analytics
ReactGA.initialize(process.env.GA_ID);

// Log Page View Function
function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

function requireAuth(nextState, replace) {
  if (
    nextState.location.pathname === '/Review' ||
    nextState.location.pathname === '/BankLogin' ||
    nextState.location.pathname === '/BankSelection'
  ) {
    if (!store.getState().session.hasDispatched) {
      store.dispatch(checkTransactionAttempt());
    }

    const auth = store.getState().authorization;
    if (!auth.isAuthenticated) {
      replace('/');
    }
  } else if (nextState.location.pathname === '/' && nextState.location.query.id) {
    const transactionAttemptID = nextState.location.query.id;
    // Check to see if the user is logged in.
    if (!store.getState().session.hasDispatched) {
      store.dispatch(checkTransactionAttempt(transactionAttemptID));
    }
    // Grab our authorization
    const auth = store.getState().authorization;
    if (auth.isAuthenticated) {
      if (nextState.location.state && nextState.location.pathname) {
        replace('/Review');
      } else {
        replace('/');
      }
    }
  } else if (!store.getState().session.hasDispatched) {
    store.dispatch(checkTransactionAttempt());
  }
}

// Get Fingerprint
getFingerprint(store.dispatch);

// Main Render Statement.
render(
  <Provider store={store}>
    <Router history={history} onUpdate={logPageView}>
      <Route path="/" component={App} onEnter={requireAuth}>
        <IndexRoute component={CheckPhone} />
        <Route path="/PIN" component={Pin} />
        <Route path="/OTP" component={Otp} />
        <Route path="/Review" component={Review} />
        <Route path="/signup/otp" component={SignupOtp} />
        <Route path="/signup/profile" component={SignupProfile} />
        <Route path="/signup/pin" component={SignupPin} />
        <Route path="/BankLogin" component={BankLogin} />
        <Route path="/BankSelection" component={BankSelection} />
        <Route path="/pinreset/otp" component={PinResetOtp} />
        <Route path="/pinreset/banklogin" component={PinResetBankLogin} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>,
document.getElementById('app')
);
