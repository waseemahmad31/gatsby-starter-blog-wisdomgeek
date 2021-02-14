import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Posts from '../components/posts';
const BlogPageTemplate = (props) => {
  const {
    data: {
      categories: { nodes: posts },
    },
  } = props;
  return (
    <Layout>
      <Posts posts={posts} />
    </Layout>
  );
};
export const query = graphql`
  query GetBlogPages($skip: Int!, $limit: Int!) {
    categories: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        frontmatter {
          title
          categories
          date(formatString: "MMMM Do, YYYY")
          slug
          author
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
        id
      }
    }
  }
`;

export default BlogPageTemplate;
