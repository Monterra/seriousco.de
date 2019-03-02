import React, {useState, useEffect} from 'react';
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

import Link from './link';
import './layout.less';

const useAnchorScroll = () => {
  useEffect(() => {
    let hash = window.decodeURI(window.location.hash.replace('#', ''));
    if (hash) {
      let element = document.getElementById(hash);
      if (element) {
        let offset = element.offsetTop;
        // Wait for the browser to finish rendering before scrolling.
        setTimeout(() => {
          window.scrollTo(0, offset + 150)
        }, 0);
      }
    }
  }, []);
};

const useMetaUpdate = (frontmatter) => {
  useEffect(() => {
    let siteInformation = {
      title: 'seriousco.de',
      url: 'https://seriousco.de/'
    };
    if (typeof window !== `undefined`) {
      siteInformation.url = window.location.href;
    }
    if (frontmatter) {
      siteInformation.title = frontmatter.title;
    }

    if (typeof document !== `undefined`) {
      document.querySelector('meta[property="og:title"]').setAttribute('content', siteInformation.title);
      document.querySelector('meta[property="og:url"]').setAttribute('content', siteInformation.url);
    }
  }, []);
};

const Layout = ({ frontmatter, children }) => {
  const [sidebarActive, setSidebarActive] = useState(false);
  useAnchorScroll();
  useMetaUpdate(frontmatter);

  return (
    <>
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
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;