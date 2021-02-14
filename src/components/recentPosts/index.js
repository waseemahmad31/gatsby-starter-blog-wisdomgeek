import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import RecentPost from './recentPost';
import style from "./recentPost.module.css"


export const query = graphql`
  {
    allMdx(limit: 10, sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      nodes {
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
`;

export const RecentPosts = () => {
    const {
        allMdx: { nodes: posts },
      } = useStaticQuery(query);
  return (
    <div>
        <h3 className={style.title} >Recent Articles</h3>
        <div>
        {posts.map((node, index) => {
            return <RecentPost frontmatter={node.frontmatter} key={index} />;
        })}
        </div>
    </div>
  );
};

export default RecentPosts;
