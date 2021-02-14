import React from 'react';
import Layout from '../components/layout';
import RecentPosts from '../components/recentPosts';
import PostTemplate from '../templates/post-template';

const articleContainerStyle = {
  display: `flex`,
  flexDirection: 'row',
  justifyContent: 'space-between',
  width:`100%`
};

const leftContainerStyle = {
  width:`70%`
};

const rightContainerStyle = {
  width:`30%`
};

const PostPage = () => {
  return (
    <Layout>
      <div style={articleContainerStyle}>
        <div style={leftContainerStyle}>
          <PostTemplate />
        </div>
        <div style={rightContainerStyle}>
          <RecentPosts />
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;