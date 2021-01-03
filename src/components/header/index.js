import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import NavBar from './navbar';
import SocialLink from './social-link';

const homeStyle = {
  textDecoration: `none`,
  color: `white`,
};

const headerContainerStyle = {
  background: `linear-gradient(-45deg,#116ace,#0d42a2)`,
  marginBottom: `1.45rem`,
  margin: `0 auto`,
};

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          tagline
          socialLinks {
            name
            link
            faIcon
          }
        }
      }
    }
  `);
  return (
    <header style={headerContainerStyle}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={homeStyle}>
          {data.site.siteMetadata.title} {data.site.siteMetadata.tagline}
        </Link>
        {data.site.siteMetadata.socialLinks.length > 0 &&
          data.site.siteMetadata.socialLinks.map(({ name, link, faIcon }) => (
            <SocialLink link={link} name={name} faIcon={faIcon}></SocialLink>
          ))}
      </h1>
      <NavBar />
    </header>
  );
};

export default Header;
