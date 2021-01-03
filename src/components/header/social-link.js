import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const brandColors = {
  facebook: `#3b5998`,
  linkedin: `#0976b4`,
  github: `#663300`,
  instagram: `#3f729b`,
  youtube: `#e52d27`,
  twitter: `#55acee`,
};

const socialLinkStyle = {
  display: `inline-block`,
  marginLeft: `1rem`,
};

const iconStyle = (color) => ({
  color,
  marginRight: '.3rem',
});

const linkStyle = {
  textDecoration: `none`,
};

const SocialIcon = ({ link, faIcon }) => (
  <div style={socialLinkStyle}>
    <a rel="noreferrer noopener" target="_blank" href={link} style={linkStyle}>
      <FontAwesomeIcon
        icon={['fab', faIcon]}
        style={iconStyle(brandColors[faIcon])}
      />
    </a>
  </div>
);

export default SocialIcon;
