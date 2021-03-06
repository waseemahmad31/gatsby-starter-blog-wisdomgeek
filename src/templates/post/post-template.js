import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from '../../components/layout';
import PostBreadcrumb from '../../components/breadcrumb/post-breadcrumb';
import RecentPosts from '../../components/recentPosts';
import style from "./post-template.module.css"

const PostTemplate = ({ data }) => {
    const {
        mdx: {
            frontmatter: { title, categories, image, date },
            body,
      },
      allAuthorsJson: { nodes: authors },    
  } = data;
  
    return (
        <Layout>
        <PostBreadcrumb author={authors[0]}
          postDate={date} categories={categories} />
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
                    <RecentPosts />
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
  query GetSinglePost($slug: String, $author: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        categories
        date(formatString: "MMMM Do, YYYY")
        author
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
    allAuthorsJson(filter: { id: { eq: $author } }) {
      nodes {
        id
        profileImage
      }
    }
  }
`;

export default PostTemplate;
