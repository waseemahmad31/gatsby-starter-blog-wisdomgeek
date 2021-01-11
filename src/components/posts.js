import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

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
        return (
          <div key={index}>
            {node.frontmatter.title}, {node.frontmatter.description}
            <Image
              fluid={node.frontmatter.image.childImageSharp.fluid}
              alt={node.frontmatter.image.name}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Posts;
