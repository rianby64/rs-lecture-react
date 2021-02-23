
import * as React from 'react';

interface Props {
    value: string;
}

interface State {
    value: string;
}

export class ControlledComponent1 extends React.Component<Props, State> {
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
            value: 'the initial value'
        })
    }

    render() {
        const { value } = this.state;
        const { updateValue, reset } = this;
        return (
            <div>
                <div>Controlled component</div>
                <div>{value}</div>
                <input value={value} onChange={updateValue} />
                <button onClick={reset}>Reset</button>
            </div>
        )
    }
}
