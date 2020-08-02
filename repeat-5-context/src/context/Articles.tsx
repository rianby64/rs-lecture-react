
import * as React from 'react';
import { useState, createContext } from 'react';
import { ArticleType } from '../components/Article';

const defaultContext: {
    articles: ArticleType[];
    addArticle: (article: ArticleType) => void;
    deleteArticle: (id: number) => void;
} = {
    articles: [],
    addArticle: (_: ArticleType) => {
        console.log('never reach it');
    },
    deleteArticle: (_: Number) => {
        console.log('never reach it');
    }
};

const ArticleContext = createContext(defaultContext);

const ArticleProvider = ({ children }: { children: JSX.Element }) => {
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

    return (
        <ArticleContext.Provider value={{articles, addArticle, deleteArticle}}>
            {children}
        </ArticleContext.Provider>
    );
}

export default ArticleProvider;
