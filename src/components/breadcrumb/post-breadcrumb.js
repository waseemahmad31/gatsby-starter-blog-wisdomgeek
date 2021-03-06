import React from 'react';
import style from "./post-breadcrumb.module.css"
import AuthorBreadcrumb from '../../components/breadcrumb/author/author-breadcrumb';
import CategoriesBreadcrumb from '../../components/breadcrumb/categories/categories-breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PostBreadcrumb = ({ author, postDate, categories }) => {
    return (
        <div className={style.container}>
            <AuthorBreadcrumb author={author} />
            <FontAwesomeIcon icon={['fab', 'slash']} className={style.slashIcon} />
            <div>
                <span className={style.date} >Modified date: {postDate}</span>
            </div>
            <FontAwesomeIcon icon={['fab', 'slash']} className={style.slashIcon} />
            <CategoriesBreadcrumb categories={categories} />
        </div>
    );
};
export default PostBreadcrumb;