import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import NavBar from './navbar';
import SocialLink from './social-link';

const homeStyle = {
  textDecoration: `none`,
};

const headerContainerStyle = {
  marginBottom: `1.45rem`,
  margin: `0 auto`,
};

const siteTitleStyle = { margin: 0, display: `inline-block` };

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          tagline
          socialLinks {
            link
            faIcon
          }
          navigationLinks {
            name
            to
          }
        }
      }
    }
  `);
  return (
    <header style={headerContainerStyle}>
      <h1 style={siteTitleStyle}>
        <Link to="/" style={homeStyle}>
          {data.site.siteMetadata.title} {data.site.siteMetadata.tagline}
        </Link>
      </h1>
      <NavBar navigationLinks={data.site.siteMetadata.navigationLinks} />
      {data.site.siteMetadata.socialLinks.length > 0 &&
        data.site.siteMetadata.socialLinks.map(({ name, link, faIcon }) => (
          <SocialLink link={link} faIcon={faIcon} key={link}></SocialLink>
        ))}
    </header>
  );
};

export default Header;
