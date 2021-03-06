import React from 'react';
import style from "./recentPost.module.css"

const RecentPost = ({ frontmatter }) => {
  const {
    title,
    description,
    slug,
    categories,
    author,
    date,
  } = frontmatter;
  const mainCategory = categories[categories.length - 1],
  postUrl = `/${categories.join('/')}/${slug}/`,
  authorUrl = `/author/${author.toLocaleLowerCase().replace(/ /g, '-')}/`,
  categoryUrl = `/${categories.join('/')}/`;
    return (
    <div className={`${style.moduleFlex} ${style.moduleWrap}`}>
    <div className={style.moduleContainer}>
        <div className={style.moduleMetaInfo}>
            <h3 className={`${style.entryTitle} ${style.moduleTitle}`}>
                <a href={postUrl} rel="bookmark" title={title}>{title}</a>
            </h3>
            <div className={style.editorDate}>
                <a href={categoryUrl}  className={style.postCategory}>{mainCategory}</a>
                <span className={style.authorDate}>
                <span className={style.authorName}>
                        <a href={authorUrl}>{author}</a>
                        <span>-</span>
                    </span>
                    <span className={style.postDate}>
                        <span>Modified date: {date}</span>
                    </span> 
                </span>
            </div>
            <div className={style.excerpt}> {description}</div>
            <div className={style.readMore}> 
                <a href={categoryUrl}>Read more</a>
            </div>
        </div>
    </div>
</div>
  );
};
export default RecentPost;