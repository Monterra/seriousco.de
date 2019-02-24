import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <Header link="">404 - Page not found</Header>
    <p>Sorry, the page your were looking for couldn't be found.</p>
  </Layout>
);

export default NotFoundPage;