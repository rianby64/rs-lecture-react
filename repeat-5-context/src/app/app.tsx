
import * as React from 'react';
import { render } from 'react-dom';

import Articles from '../containers/Articles';
import ArticleProvider from '../context/Articles';

render(
    <div>
        <ArticleProvider>
            <Articles></Articles>
        </ArticleProvider>
    </div>,
    document.getElementById("root")
);
