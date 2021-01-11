import { Link } from 'gatsby';
import React from 'react';
import links from '../../constants/links';

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

const NavBar = () => (
  <nav style={navBarStyle}>
    <ul style={listContainerStyle}>
      {links.map((link) => (
        <li style={navBarStyle} key={link.name}>
          <Link to={link.to} style={linkStyle}>
            {link.name}
          </Link>
        </li>
      ))}
      <li style={navBarStyle}>Search</li>
    </ul>
  </nav>
);

export default NavBar;
