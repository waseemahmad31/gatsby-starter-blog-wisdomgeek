import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Posts from '../components/posts';

const getPosts = graphql`
  {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { categories: { in: "self-help" } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
            author
            description
            categories
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

const SelfHelPage = () => {
  const response = useStaticQuery(getPosts);
  const posts = response.allMdx.edges;
  return (
    <Layout>
      <Posts posts={posts} />
    </Layout>
  );
};

export default SelfHelPage;
