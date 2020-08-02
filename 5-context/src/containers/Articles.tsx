
import * as React from 'react';
import { useState, useContext } from "react";
import { ArticleContext } from "../context/articleContext";
import Article from "../components/Article/Article";

const Articles = () => {
  //
  //const [articles, setArticles] = useState([
  //  { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
  //  { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
  //])
  const { articles} = useContext(ArticleContext);

  return (
    <>
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </>
  )
}

export default Articles
