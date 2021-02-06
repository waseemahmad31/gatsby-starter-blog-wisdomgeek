import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

const navBarStyle = {
  marginLeft: `1rem`,
  display: `inline-block`,
};

const listContainerStyle = {
  listStyle: `none`,
  ...navBarStyle,
};

const linkStyle = {
  textDecoration: `none`,
};

const Footer = () => {
  const data = useStaticQuery(graphql`
    query siteFooterQuery {
      site {
        siteMetadata {
          copyrightText
          navigationLinks {
            name
            to
          }
        }
      }
    }
  `);
  return (
    <footer>
      <ul style={listContainerStyle}>
        {data.site.siteMetadata.navigationLinks.map((link) => (
          <li style={navBarStyle} key={link.name}>
            <Link to={link.to} style={linkStyle}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <p style={listContainerStyle}>
        &copy; {data.site.siteMetadata.copyrightText}
      </p>
    </footer>
  );
};

export default Footer;
