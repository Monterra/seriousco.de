import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../components/link';
import {
  FaCalendarAlt,
} from 'react-icons/fa';

import './blog-info.less';

const BlogInfo = ({dateString, showTwitterLink}) => {
  let AuthorWrapper = 'span';
  if (showTwitterLink) {
    AuthorWrapper = Link;
  }

  return (
    <div className="blog-info">
      By <AuthorWrapper to="https://www.twitter.com/dominiksumer" className="blog-info-author">@dominiksumer</AuthorWrapper>
      <span className="blog-info-date"><FaCalendarAlt/> {dateString}</span>
    </div>
  );
};
BlogInfo.defaultProps = {
  showTwitterLink: true
};
BlogInfo.propTypes = {
  showTwitterLink: PropTypes.bool
};

export default BlogInfo;