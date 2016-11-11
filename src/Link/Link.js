import React, { PropTypes } from 'react'
import {Link} from 'react-router'

const Link = (props) => {
  return (
    <Link to={props.to}>Home</Link>
  )
}

Link.PropTypes = {
  to = React.PropTypes.string,
}

export default Link
