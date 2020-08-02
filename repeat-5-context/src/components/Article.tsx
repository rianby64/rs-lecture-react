
import * as React from 'react';

export interface ArticleType { id: number; title: string; body: string; };

interface Props {
    article: ArticleType
    deleteArticle: (id: number) => void
}

const Article = (props: Props) => {
    const { article, deleteArticle } = props;
    const deleteHandler = (id: number) => (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        deleteArticle(id);
    }
    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <button onClick={deleteHandler(article.id)}>Delete</button>
        </div>
    )
};

export default Article;
