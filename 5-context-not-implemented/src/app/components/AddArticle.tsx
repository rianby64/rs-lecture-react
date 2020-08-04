
import * as React from 'react';
import { useState } from 'react';

import { ArticleType } from '../components/Article'

interface Props {
    addArticle: (article: ArticleType) => void
}

const AddArticle = (props: Props) =>{
    const { addArticle } = props;
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


export { AddArticle };
