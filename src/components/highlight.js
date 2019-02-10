import React from 'react';
import PropTypes from 'prop-types';
import {FaFontAwesomeFlag, FaExclamationTriangle} from 'react-icons/fa';

const Highlight = ({ type, title, children, ...other }) => {
  let Icon;
  switch(type) {
    case 'warning':
      Icon = FaExclamationTriangle;
      break;
    default:
      Icon = FaFontAwesomeFlag;
  }

  return (
    <div className={`highlight ${type}`} {...other}>
      <div className="highlight-title"><Icon/>{title}</div>
      <div className="highlight-description">{children}</div>
    </div>
  )
};

Highlight.defaultProps = {
  type: 'info'
};

Highlight.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string
};

export default Highlight;