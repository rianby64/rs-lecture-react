
import * as React from 'react';
import { useState, useContext } from "react"
//import "./AddArticle.css"
import { ArticleContext } from "../../context/articleContext";

const AddArticle = () => {
  const { saveArticle } = useContext(ArticleContext);
  const [article, setArticle] = useState({} as { id: number; title: string; body: string; });

  const handleArticleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value,
    })
  }
  const addNewArticle = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveArticle(article);
  }

  return (
    <form onSubmit={addNewArticle} className="add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Body"
        onChange={handleArticleData}
      />
      <button>Add article</button>
    </form>
  )
}
export default AddArticle
