import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from '../components/layout';
const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, categories, image, date },
      body,
    },
  } = data;

  return (
    <Layout>
      <article>
        <Image fluid={image.childImageSharp.fluid} />
        <div>
          <span>{categories}</span>
          <h2>{title}</h2>
          <p>{date}</p>
        </div>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
      <article></article>
    </Layout>
  );
};

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        categories
        date(formatString: "MMMM Do, YYYY")
        image {
          childImageSharp {
            fluid {
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`;

export default PostTemplate;
