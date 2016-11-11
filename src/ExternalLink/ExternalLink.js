import React from 'react';
import { Link } from 'react-router';
import ReactGA from 'react-ga';

ReactGA.event({
  category: '404',
  action: 'Page Not Found',
  label: window.location.pathname,
  nonInteraction: true,
});

const ExternalLink = ({ to }) =>
   (
     <Link to={to}>Home</Link>
  )
;

ExternalLink.propTypes = {
  to: React.PropTypes.string,
};

export default ExternalLink;
