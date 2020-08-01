
import * as React from "react";
import { useState } from "react";

interface CounterProps {
    v: number;
}

interface CounterState {
    counter: number
}

export class Counter extends React.Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
        super(props);
        this.state = {
            counter: props.v,
        };
    }

    handleClick = (): void => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        const { counter } = this.state;
        return (
            <div>
                <span>{counter}</span>
                <button onClick={this.handleClick}>Increase</button>
            </div>
        )
    }
}

export function CounterByHooks(props: CounterProps) {
    const [counter, setCounter] = useState(props.v);

    function handleClick(): void {
        setCounter(counter + 1);
    }

    return (
        <div>
            <span>{counter}</span>
            <button onClick={handleClick}>Increase</button>
        </div>
    )
}
