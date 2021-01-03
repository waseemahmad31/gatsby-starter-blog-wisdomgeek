import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const socialLinkStyle = {
  display: `inline-block`,
  marginLeft: `1rem`,
};

const iconStyle = { color: 'white', marginRight: '.3rem' };

const linkStyle = {
  textDecoration: `none`,
  color: `#ffffff`,
  textTransform: `capitalize`,
};

const SocialIcon = ({ name, link, faIcon }) => (
  <div style={socialLinkStyle}>
    <a rel="noreferrer noopener" target="_blank" href={link} style={linkStyle}>
      <FontAwesomeIcon icon={['fab', faIcon]} style={iconStyle} />
      {name}
    </a>
  </div>
);

export default SocialIcon;
