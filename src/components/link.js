import React, {useContext} from 'react';
import { Link as GatsbyLink } from "gatsby";
import {
  FaExternalLinkAlt
} from 'react-icons/fa';

import SidebarContext from './sidebar-context';

const Link = ({ children, to, ...other }) => {
  const setSidebarActive = useContext(SidebarContext);

  if (to === '#') {
    return <a href={to} {...other}>{children}</a>;
  }

  let internal = true;
  if (typeof window !== `undefined`) {
    const hostRegExp = new RegExp("//" + window.location.host + "($|/)");
    internal = (to.substring(0,4) === "http") ? hostRegExp.test(to) : true;
  }

  if (internal) {
    return (
      <GatsbyLink to={to} {...other} onClick={() => setSidebarActive(false)}>
        {children}
      </GatsbyLink>
    )
  }

  let className = 'external';
  if (other.className) {
    className = `${other.className} ${className}`;
  }

  return (
    <a href={to} {...other} className={className} target="_blank" rel="noopener noreferrer">
      <span>{children}</span>
      <FaExternalLinkAlt className="external-icon"/>
    </a>
  )
};

export default Link;