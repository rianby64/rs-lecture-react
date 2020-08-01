
import * as React from 'react';
import { render } from 'react-dom';

import { Props1 } from './Props1';
import { Props2 } from './Props2';
import { Props3 } from './Props3';
import { Props4 } from './Props4';
import { Props5 } from './Props5';
import { Props6 } from './Props6';
import { Props7 } from './Props7';

const user = {
    name:"Miles",
    surname:"Davis",
    address:"308 W 77th St, New York, NY 10024, United States",
};

const extra = {
    secretCode: '1234',
    permisions: 'abc'
};

render(
    <div>
        <Props1
            name="Miles"
            surname="Davis"
            address="308 W 77th St, New York, NY 10024, United States" />

        <Props2
            extra={{secretCode: '1234', permisions: 'abc'}}
            user={user} />

        <Props3
            extra={extra}
            user={user} />

        <Props4
            placeholder="placeholder"
            value="a value"
            submit={(value) => console.log(value, 'submited')}/>

        <Props5 />

        <Props6 value="a second value" />

        <Props7 />
    </div>,
    document.getElementById("root")
);
