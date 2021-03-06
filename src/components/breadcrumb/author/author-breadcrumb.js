import React from 'react';
import style from "./author-breadcrumb.module.css"

const AuthorBreadcrumb = ({ author }) => {

    const authorUrl = `/author/${author.id.toLocaleLowerCase().replace(/ /g, '-')}/`;

    return (
        <div className={style.container}>
            <a href={authorUrl} className={style.authorPhoto}>
                <img alt="" className={style.avatar} src={author.profileImage}/>
            </a>
            <div className={style.authorNameContainer}>
                <span className={style.authorBy}>By</span>
                <a className={style.authorName} href={authorUrl}>{author.id}</a>
            </div>
        </div>
    );
};
export default AuthorBreadcrumb;