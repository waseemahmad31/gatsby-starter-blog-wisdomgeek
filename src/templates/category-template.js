import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Posts from '../components/posts';
const CategoryTemplate = (props) => {
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
  query GetCategoryPosts($category: String!) {
    categories: allMdx(
      filter: { frontmatter: { categories: { in: [$category] } } }
      sort: { fields: frontmatter___date, order: DESC }
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

export default CategoryTemplate;
