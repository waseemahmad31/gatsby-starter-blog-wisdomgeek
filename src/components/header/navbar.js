import { Link } from 'gatsby';
import React from 'react';

const navbarStyle = {
  display: `inline-block`,
  marginLeft: `1rem`,
  listStyle: `none`,
  background: 'white',
};

const listItemStyle = {
  display: `inline-block`,
};

const NavBar = () => (
  <nav>
    <ul style={navbarStyle}>
      <li style={listItemStyle}>
        <Link to="/">Home</Link>
      </li>
      <li style={listItemStyle}>
        <Link to="/development">Development</Link>
      </li>
      <li style={listItemStyle}>
        <Link to="/self-help">Self Help</Link>
      </li>
      <li style={listItemStyle}>
        <Link to="/about">About</Link>
      </li>
      <li style={listItemStyle}>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </li>
      <li style={listItemStyle}>Search</li>
    </ul>
  </nav>
);

export default NavBar;
