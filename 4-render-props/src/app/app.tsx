
import * as React from 'react';
import { render } from 'react-dom';

import {
    ComponentAsClass,
    ComponentAsFunction,
    ComponentWithRP,
    PropsExample1
} from './RenderPropsExample';

import {
    MouseTracker1, MouseTracker2, WithMouseComponent
} from './Mouse';

import { MouseTrackerHook } from './Hooks';

import { WithComponentNoProps, WithComponent } from './HOC';


const renderAsProp = (props: PropsExample1): JSX.Element => {
    return (
        <div>
            <div>The render as prop</div>
            <div>Name: {props.name}, Surname: {props.surname}</div>
        </div>
    )
}

class MyEmptyComponent extends React.Component {
    render() {
        return (
            <div>This is my empty component</div>
        )
    }
}

class CatCursor extends React.Component<{ x: number, y: number}> {
    render() {
        const { x, y } = this.props;
        return (
            <div>This is the cat cursor {x}, {y}</div>
        )
    }
}

const MyHOC = WithComponentNoProps(MyEmptyComponent);
const MyHOC2 = WithComponent(ComponentAsFunction);
const MouseTrackerWithCatCursor = WithMouseComponent(CatCursor)
const MouseTrackerWithMouseHook = WithMouseComponent(MouseTrackerHook)

render(
    <div>
        {/* <MyHOC2 namereal="Miles" surnamereal="Davis" /> */}
        {/* <MouseTrackerWithCatCursor></MouseTrackerWithCatCursor> */}
        <ComponentWithRP render={renderAsProp} name="this is my name" surname="this is my surname" />
    </div>,
    document.getElementById("root")
);
