import React from 'react';
import Layout from '../components/layout';
import Posts from '../components/posts';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <title>Home Page</title>
      <Posts />
    </Layout>
  );
};

export default IndexPage;
