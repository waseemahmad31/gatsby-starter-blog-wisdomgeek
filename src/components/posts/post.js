import Image from 'gatsby-image';
import React from 'react';

const articleStyle = {
  display: `flex`,
};
const columnStyle = {
  flex: 1,
  marginLeft: `1rem`,
};

const Post = ({ frontmatter }) => {
  const { title, image, description } = frontmatter;

  return (
    <article style={articleStyle}>
      <div style={columnStyle}>
        <Image fluid={image.childImageSharp.fluid} alt={image.name} />
      </div>
      <div style={columnStyle}>
        {title}, {description}
      </div>
    </article>
  );
};

export default Post;
