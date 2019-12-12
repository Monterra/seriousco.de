import React from 'react';
import Layout from './layout';
import Header from './header';
import BlogInfo from './blog-info';

import './entry-layout.less';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const EntryLayout = ({frontmatter, children}) => {
  const splittedDate = frontmatter.date.split('-');
  const dateString = `${splittedDate[2]}. ${months[parseInt(splittedDate[1]) - 1]} ${splittedDate[0]}`;

  return (
    <Layout frontmatter={frontmatter}>
      <div className="blog-entry-header" style={{backgroundImage: `url(/blog-images/${frontmatter.image})`}}/>
      <Header link="">{frontmatter.title}</Header>
      <BlogInfo dateString={dateString}/>
      {children}
    </Layout>
  );
};

export default EntryLayout;