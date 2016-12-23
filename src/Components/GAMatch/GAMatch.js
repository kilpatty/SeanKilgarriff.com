import React from 'react';
import { Match } from 'react-router';
import ReactGA from 'react-ga';


const GAMatch = ({ component: Comp, passProps, ...props }) =>
  <Match
    {...props} render={(matchedProps) => {
      ReactGA.set({ page: window.location.pathname });
      ReactGA.pageview(window.location.pathname);
      return <Comp {...passProps} {...matchedProps} />;
    }}
  />;

export default GAMatch;

GAMatch.propTypes = {
  component: React.PropTypes.func,
  passProps: React.PropTypes.object,
};
