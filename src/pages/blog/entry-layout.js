import React from 'react';
import Layout from '../../components/layout';
import Header from '../../components/header';
import BlogInfo from './blog-info';

import './entry-layout.less';

const EntryLayout = ({frontmatter, children}) => {
  return (
    <Layout frontmatter={frontmatter}>
      <div className="blog-entry-header" style={{backgroundImage: `url(/blog-images/${frontmatter.image})`}}/>
      <Header link="">{frontmatter.title}</Header>
      <BlogInfo dateString={frontmatter.dateString}/>
      {children}
    </Layout>
  );
};

export default EntryLayout;