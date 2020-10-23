import * as React from 'react';
import { createContext, useState } from "react";

const saveArticle = (_: { id: number; title: string; body: string; }) => {
  console.log('this is the default saveArticle, never gonna be called');
};

const deleteArticle = (_: { id: number }) => {
  console.log('this is the default saveArticle, never gonna be called');
};

export const ArticleContext = createContext({
  articles: [],
  saveArticle: saveArticle,
  deleteArticle: deleteArticle} as {
  articles: {
    id: number;
    title: string;
    body: string;
  }[],
  saveArticle: typeof saveArticle,
  deleteArticle: typeof deleteArticle,
});

const ArticleProvider = ({ children }: { children: React.ReactNode }) => {
  const [articles, setArticles] = useState([
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" }
  ]);

  const saveArticle = (article: {
    id: number;
    title: string;
    body: string;
  }) => {
    const newArticle = {
      id: Math.random(), // not really unique but it's just an example
      title: article.title,
      body: article.body
    };
    setArticles([...articles, newArticle ]);
  };

  const deleteArticle = (article: {
    id: number
  }) => {
    setArticles([...articles.filter(a => a.id != article.id)]);
  };

  return (
    <ArticleContext.Provider value={{ articles, saveArticle, deleteArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;
