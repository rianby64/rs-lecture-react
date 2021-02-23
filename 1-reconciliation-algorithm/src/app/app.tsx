
import * as React from 'react';
import { render } from 'react-dom';

import { Toggler1 } from './Toggler1';
import { Toggler2 } from './Toggler2';
import { ArrValues } from './ArrValues';

render(
    <div>
        {/* <Toggler1 /> */}
        {/* <Toggler2 /> */}
        <ArrValues values={(new Array(8000)).fill(0).map(v => Math.round(Math.random() * 100))} />
    </div>,
    document.getElementById("root")
);
