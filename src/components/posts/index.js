import React from 'react';
import Post from './post';

export const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((node, index) => {
        return <Post frontmatter={node.frontmatter} key={index} />;
      })}
    </div>
  );
};
export default Posts;
