import React from 'react';

import './tooltip.less';

const Tooltip = ({ text, children, ...other }) => {
  return (
    <span data-tooltip={text} {...other}>{children}</span>
  )
};

export default Tooltip;