
import * as React from 'react';

interface Props {
    value: string;
}

interface State {
    value: string;
}

export class UncontrolledComponent1 extends React.Component<Props, State> {
    input = React.createRef<HTMLInputElement>();

    constructor(props: Props) {
        super(props);
        this.state = {
            value: this.props.value,
        };
    }

    updateValue = (event: React.ChangeEvent<HTMLInputElement>): void =>  {
        this.setState({
            value: event.target.value
        });
    }

    reset = () => {
        this.setState({
            value: ''
        });
        if (this.input.current) {
            this.input.current.value = '';
        };
    }

    render() {
        const { value } = this.state;
        const { updateValue, reset, input } = this;
        return (
            <div>
                <div>
                    Uncontrolled component example 1 - like the controlled above
                </div>
                <div>{value}</div>
                <input
                    ref={input}
                    onChange={updateValue} />
                <button onClick={reset}>Reset</button>
            </div>
        )
    }
}
