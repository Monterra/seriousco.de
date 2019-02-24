import React from 'react';
import Header from '../../components/header';
import { IconNerd } from '../../components/icons';
import Layout from '../../components/layout';

const SecondPage = () => (
  <Layout>
    <Header link="">Thanks</Header>
    <p>
      Thanks for your message! <IconNerd/>
    </p>
    <p>
      I will respond as soon as possible.
    </p>
  </Layout>
);

export default SecondPage;