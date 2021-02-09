import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SocialLink from '../components/social-link';

const AuthorTemplate = (props) => {
  const {
    data: {
      allAuthorsJson: { nodes: authors },
    },
  } = props;
  const author = authors[0];
  return (
    <Layout>
      <h1>{author.id}</h1>
      <div>{author.bio}</div>
      {author.socialLinks.length > 0 &&
        author.socialLinks.map(({ link, faIcon }) => (
          <SocialLink link={link} faIcon={faIcon} key={link}></SocialLink>
        ))}
    </Layout>
  );
};
export const query = graphql`
  query GetAuthorInfo($authorId: String!) {
    allAuthorsJson(filter: { id: { eq: $authorId } }) {
      nodes {
        id
        bio
        socialLinks {
          link
          faIcon
        }
      }
    }
  }
`;

export default AuthorTemplate;
