import Image from 'gatsby-image';
import React from 'react';

const anchorStyle = {
  textDecoration: 'none',
};
const articleStyle = {
  display: `flex`,
  border: '0.1em solid #e6e6e6',
};
const columnStyle = {
  flex: 1,
  marginLeft: `1rem`,
};
const headerStyle = {
  textTransform: 'capitalize',
};

const Post = ({ frontmatter }) => {
  const {
    title,
    image,
    description,
    slug,
    categories,
    author,
    date,
  } = frontmatter;
  const mainCategory = categories[categories.length - 1],
    postUrl = `/${categories.join('/')}/${slug}/`,
    authorUrl = `/author/${author.toLocaleLowerCase().replace(/ /g, '-')}/`,
    categoryUrl = `${categories.join('/')}/`;
  return (
    <article style={articleStyle}>
      <div style={columnStyle}>
        <Image fluid={image.childImageSharp.fluid} alt={image.name} />
      </div>
      <div style={columnStyle}>
        <a href={postUrl} style={anchorStyle}>
          <h3 style={headerStyle}>{title}</h3>
        </a>
        <div>{description}</div>
        <a href={authorUrl} style={anchorStyle}>
          <span style={headerStyle}>{author}</span>
        </a>
        <div>Modified date: {date}</div>
        <a href={categoryUrl} style={anchorStyle}>
          <span style={headerStyle}>{mainCategory}</span>
        </a>
      </div>
    </article>
  );
};

export default Post;
