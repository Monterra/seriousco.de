import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  FaAddressCard,
  FaBars,
  FaBookmark,
  FaFacebookF,
  FaGithub,
  FaHeart,
  FaLaptopCode,
  FaMailBulk,
  FaRegFileCode,
  FaTwitter
} from 'react-icons/fa';

import SidebarContext from './sidebar-context';
import Link from './link';
import SEO from './seo';
import './layout.less';

const Layout = ({ children }) => {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <SidebarContext.Provider value={setSidebarActive}>
      <SEO title="seriousco.de" keywords={[`seriousco.de`, `Dominik Sumer`, `react`]}/>
      <div className="background"/>
      <div className="header">
        <div className="header-backdrop"/>
        <div className="header-content">
          <div className="header-menu" onClick={() => setSidebarActive(true)}><FaBars/></div>
          <div className="header-tag-line sm">seriousco.de</div>
          <div className="header-tag-line md">It's all about the software.</div>
          <div className="header-icons">
            <Link to="https://www.facebook.com/dominik.sumer"><span className="screen-reader-text">Facebook</span><FaFacebookF/></Link>
            <Link to="https://github.com/dsumer"><span className="screen-reader-text">Github</span><FaGithub/></Link>
            <Link to="https://twitter.com/dominiksumer" className="twitter"><span className="screen-reader-text">Twitter</span><FaTwitter/></Link>
          </div>
        </div>
      </div>
      <div className="main">
        {sidebarActive && <div className="sidebar-backdrop" onClick={() => setSidebarActive(false)}/>}
        <div className={sidebarActive ? 'sidebar active' : 'sidebar'}>
          <div className="banner">
            <div className="logo">
              <FaLaptopCode/>
            </div>
            <div className="description">
              <Link to="https://github.com/dsumer/seriousco.de" className="project-name"><strong>seriousco.de</strong></Link>
              <br/>
              by <Link to="https://github.com/dsumer">Dominik Sumer</Link>
            </div>
          </div>
          <ul>
            <li>
              <Link to="/"><FaAddressCard/> About</Link>
            </li>
            <li>
              <Link to="/blog"><FaRegFileCode/> Blog</Link>
            </li>
            <li>
              <Link to="/timeline"><FaBars/> Timeline (CV)</Link>
            </li>
            <li>
              <Link to="/projects"><FaBookmark/> Projects</Link>
            </li>
            <li>
              <Link to="/contact"><FaMailBulk/> Contact</Link>
            </li>
          </ul>
        </div>
        <div className="wrapper">
          <div className="content">
            {children}
          </div>
          <div className="footer">
            Website built with <Link to="https://github.com/dsumer/seriousco.de" className="heart"><span className="screen-reader-text">Love</span><FaHeart/></Link> and <Link to="https://www.gatsbyjs.org/">Gatsby</Link>
          </div>
        </div>
      </div>
    </SidebarContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;