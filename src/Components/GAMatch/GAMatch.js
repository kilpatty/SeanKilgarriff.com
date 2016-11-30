import React, { PropTypes } from 'react';
import { Match } from 'react-router';
import ReactGA from 'react-ga';


const GAMatch = ({ component: Comp, passProps, ...props }) => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  return <Match {...props} render={(matchedProps) => <Comp {...passProps} {...matchedProps} />} />;
};

export default GAMatch;

GAMatch.PropTypes = {
  component: React.PropTypes.node,
};
