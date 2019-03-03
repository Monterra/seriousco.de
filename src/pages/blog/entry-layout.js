import React from 'react';
import Layout from '../../components/layout';
import Header from '../../components/header';
import BlogInfo from './blog-info';
import { DiscussionEmbed } from "disqus-react";

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
  const disqusConfig = {
    title: frontmatter.title,
    identifier: frontmatter.path
  };
  if (typeof window !== 'undefined') {
    disqusConfig.url = window.location.href;
  }

  return (
    <Layout frontmatter={frontmatter}>
      <div className="blog-entry-header" style={{backgroundImage: `url(/blog-images/${frontmatter.image})`}}/>
      <Header link="">{frontmatter.title}</Header>
      <BlogInfo dateString={dateString}/>
      {children}
      <DiscussionEmbed shortname="seriouscode" config={disqusConfig} />
    </Layout>
  );
};

export default EntryLayout;