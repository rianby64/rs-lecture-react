
import * as React from 'react';
import { useState } from 'react';

import { Article, ArticleType } from '../components/Article';
import { AddArticle } from '../components/AddArticle';

const Articles = () => {
    const [articles, setArticles] = useState([
        { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
        { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
    ]);

    const addArticle = (article: ArticleType) => {
        setArticles([...articles, article]);
    }

    return (
        <>
        <AddArticle addArticle={addArticle}></AddArticle>
        {articles.map(article =>
            <Article key={article.id} article={article} ></Article>)}
        </>
    )
};

export { Articles };
