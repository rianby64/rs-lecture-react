
import * as React from "react";

import { Counter } from './Counter';

interface State {
    toggle: boolean;
}

export class Toggler2 extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
    }

    state = {
        toggle: true
    }

    toggler = () => {
        this.setState({
            toggle: !this.state.toggle,
        })
    }

    render(): React.ReactNode {
        const { toggle } = this.state;
        return (
            <div>
                <span>Case 2 - reconciliation - different attributes, different styles</span>
                <button onClick={this.toggler}>
                    Change { toggle ? 'true' : 'false' }
                </button>
                <div className={ toggle ? 'true' : 'false' }>
                    <Counter v={3} />
                </div>
                <div style={{ color: toggle ? 'red' : 'green' }}>
                    <Counter v={3} />
                </div>
            </div>
        )
    }
}
