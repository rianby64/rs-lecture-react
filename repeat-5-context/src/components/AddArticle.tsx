
import * as React from 'react';
import { useState, useContext } from 'react';

import { ArticleType } from '../components/Article'
import { ArticleContext } from '../context/Articles';

/*
interface Props {
    addArticle: (article: ArticleType) => void
}
*/

const AddArticle = (/*props: Props*/) => {
    const { addArticle } = useContext(ArticleContext);
    const [ article, setArticle ] = useState({ id: Math.random(), title: '', body: '' });

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addArticle(article);
        setArticle({ id: Math.random(), title: '', body: '' });
    }

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setArticle({...article, title:e.target.value});
    }
    const onChangeBody = (e: React.ChangeEvent<HTMLInputElement>) => {
        setArticle({...article, body:e.target.value});
    }

    return (
        <form onSubmit={submitHandler}>
            <input value={article.title} onChange={onChangeTitle}></input>
            <input value={article.body} onChange={onChangeBody}></input>
            <input type="submit"></input>
        </form>
    )
}

export default AddArticle;
