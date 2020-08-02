
import * as React from 'react';
import { useState, useContext } from 'react';
import Article from '../components/Article';
import AddArticle from '../components/AddArticle'
import { ArticleType } from '../components/Article';
import { ArticleContext } from '../context/Articles';

const Articles = () => {
    /*
    const [articles, setArticles] = useState([
      { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
      { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
    ]);

    const deleteArticle = (id: number) => {
        setArticles([...articles.filter(article => article.id !== id)])
    }

    const addArticle = (article: ArticleType): void => {
        setArticles([...articles, article]);
    }
    */
    const { articles } = useContext(ArticleContext);

    /*
    return (
        <>
        <AddArticle addArticle={addArticle}></AddArticle>
        {articles.map(article => (
            <Article deleteArticle={deleteArticle} key={article.id} article={article}></Article>
        ))}
        </>
    )
    */

    return (
        <>
        <AddArticle></AddArticle>
        {articles.map(article => (
            <Article key={article.id} article={article}></Article>
        ))}
        </>
    )
};

export default Articles;
