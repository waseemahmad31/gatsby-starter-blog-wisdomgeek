import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from '../../components/layout';
import RecentPosts from '../../components/recentPosts';
import style from "./post-template.module.css"

const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, categories, image, date },
      body,
    },
  } = data;

  return (
    <Layout>
      <div className={style.container}>
      <div className={`${style.coloumn} ${style.articleContainer}`}>
      <article>
        <Image fluid={image.childImageSharp.fluid} />
        <div>
          <span>{categories}</span>
          <h2>{title}</h2>
          <p>{date}</p>
        </div>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
      </div>
      <div className={`${style.coloumn} ${style.recentArticlesContainer}`}>
        <RecentPosts/>
      </div>
      </div>
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
