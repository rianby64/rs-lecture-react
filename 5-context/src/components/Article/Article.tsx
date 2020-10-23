
import * as React from 'react';
//import "./Article.css"
import { useState, useContext } from "react";
import { ArticleContext } from "../../context/articleContext";

const article = ({ article }: { article: { title: string; body: string; id: number }}) => {
  const { deleteArticle} = useContext(ArticleContext);

  const deleteArticleHandler = (article: { id: number }) => {
    return (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      deleteArticle(article);
    }
  }

  return (
  <div className="article">
    <h1>{article.title}</h1>
    <p>{article.body}</p>
    <p><button onClick={deleteArticleHandler(article)}>Delete</button></p>
  </div>)
}

export default article
