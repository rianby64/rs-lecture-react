
import * as React from 'react';

interface Props {
    value: string;
}

interface State {
    value: string;
}

export class UncontrolledComponent2 extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            value: this.props.value,
        };
    }

    updateValue = (_: React.ChangeEvent<HTMLInputElement>): void =>  {
        const input = document.querySelector('#incorrect-input') as HTMLInputElement;
        this.setState({
            value: input.value
        });
    }

    reset = () => {
        this.setState({
            value: ''
        });
        const input = document.querySelector('#incorrect-input') as HTMLInputElement;
        input.value = '';
    }

    render() {
        const { value } = this.state;
        const { updateValue, reset } = this;
        return (
            <div>
                <div>
                    Uncontrolled component example 2 - we don't do this here
                </div>
                <div>{value}</div>
                <input
                    id="incorrect-input"
                    onChange={updateValue} />
                <button onClick={reset}>Reset</button>
            </div>
        )
    }
}
