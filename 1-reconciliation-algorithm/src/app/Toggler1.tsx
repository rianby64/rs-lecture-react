
import * as React from "react";

import { Counter } from './Counter';

interface State {
    toggle: boolean;
}

export class Toggler1 extends React.Component<{}, State> {
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
                <span>Case 1 - reconciliation - different types</span>
                <button onClick={this.toggler}>
                    Change { toggle ? 'true' : 'false' }
                </button>
                { toggle ? (
                        <div>
                            <Counter v={3} />
                        </div>
                    ) : (
                        <span>
                            <Counter v={5} />
                        </span>
                    )
                }
            </div>
        )
    }
}
