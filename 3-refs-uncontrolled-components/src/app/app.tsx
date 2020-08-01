
import * as React from 'react';
import { render } from 'react-dom';

import { ControlledComponent1 } from './ControlledComponent1';
import { UncontrolledComponent1 } from './UncontrolledComponent1';
import { UncontrolledComponent2 } from './UncontrolledComponent2';
import { UncontrolledComponent3 } from './UncontrolledComponent3';

render(
    <div>
        <ControlledComponent1 value="" />
        <UncontrolledComponent1 value="initial value" />
        <UncontrolledComponent2 value="" />
        <UncontrolledComponent3 value="" />
    </div>,
    document.getElementById("root")
);
