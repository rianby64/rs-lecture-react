
import * as React from 'react';
import { render } from 'react-dom';

import ArticleProvider from "../context/articleContext";
import Articles from '../containers/Articles'
import AddArticle from "../components/AddArticle/AddArticle";

render(
    <div>
        <ArticleProvider>
            <AddArticle />
            <Articles />
        </ArticleProvider>
    </div>,
    document.getElementById("root")
);
