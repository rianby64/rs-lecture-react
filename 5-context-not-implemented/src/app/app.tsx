
import * as React from 'react';
import { render } from 'react-dom';

import { Articles } from './containers/Articles';

render(
    <div>
        It works?
        <Articles></Articles>
    </div>,
    document.getElementById("root")
);
