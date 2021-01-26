import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Post from './post';

const getPosts = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
            author
            description
            image {
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;

export const Posts = () => {
  const response = useStaticQuery(getPosts);
  const posts = response.allMdx.edges;
  console.log(posts);
  return (
    <div>
      {posts.map(({ node }, index) => {
        return <Post frontmatter={node.frontmatter} key={index} />;
      })}
    </div>
  );
};
export default Posts;
