import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import Header from '../../components/header';
import Link from '../../components/link';

import './blog.less';
import BlogInfo from '../../components/blog-info';

const BlogCard = ({post}) => {
  return (
    <Link className="blog-card" to={`/blog/${post.path}`} title={post.title} style={{backgroundImage: `url(/blog-images/${post.image})`}}>
      <div className="bc-background" />
      <div className="bc-text">
        <div className="bc-container">
          <div className="bc-title">{post.title}</div>
          <div className="bc-description">
            <BlogInfo dateString={post.dateString} showTwitterLink={false}/>
            {post.description}
          </div>
        </div>
      </div>
    </Link>
  );
};

const Page = ({data}) => {
  const blogPosts = data.allJavascriptFrontmatter.edges.map(post => post.node.frontmatter);
  const groupedBlogPosts = blogPosts.reduce(function(rv, x) {
    const key = 'dateGroup';
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});

  return (
    <Layout>
      <Header link="">Blog</Header>
      {
        Object.keys(groupedBlogPosts).map((group) => {
          const blogPosts = groupedBlogPosts[group];

          return (
            <div key={group} className="blog-group">
              <div className="blog-group-header">
                {group}
              </div>
              <div>
                {
                  blogPosts.map((post) => <BlogCard key={post.path} post={post} />)
                }
              </div>
            </div>
          );
        })
      }
    </Layout>
  );
};

export const pageQuery = graphql`
  query blogQuery {
    allJavascriptFrontmatter(
      sort: {
        fields: [frontmatter___date]
        order: DESC
      }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            description
            dateString: date(formatString: "DD. MMMM YYYY")
            dateGroup: date(formatString: "MMMM YYYY")
            image
          }
        }
      }
    }
  }
`;

export default Page;