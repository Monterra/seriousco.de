import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children, size, link, ...other }) => {
  let HeaderSize = `h${size}`;

  if (typeof window !== `undefined` && typeof link === 'undefined') {
    link = `${window.encodeURI(children.toString().toLowerCase().trim().replace(/ /g, '-'))}`;
  }

  return (
    <HeaderSize id={link} className="content-header" {...other}>
      {children}
      <a href={`#${link}`} className="content-header-link" title="Permanent link">#</a>
    </HeaderSize>
  )
};

Header.defaultProps = {
  size: '1'
};

Header.propTypes = {
  size: PropTypes.string,
  link: PropTypes.string
};

export default Header;