import React from 'react';
import style from "./categories-breadcrumb.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CategoriesBreadcrumb = ({ categories }) => {
    let categoryURL = "";
    return (
        <div className={style.container}>
            {
                categories.map(category => {
                    categoryURL += `/${category}/`;
                    return (
                        <div key={category}>
                            <a href={categoryURL} className={style.category}>{category}</a>
                            <FontAwesomeIcon icon={['fas', 'chevron-right']} className={style.slashIcon} />
                        </div>
                    )
                })
            }
        </div>
    );
};
export default CategoriesBreadcrumb;