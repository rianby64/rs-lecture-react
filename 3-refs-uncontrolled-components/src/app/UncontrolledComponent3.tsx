
import * as React from 'react';

interface Props {
    value: string;
}

interface State {
    value: string;
}

export class UncontrolledComponent3 extends React.Component<Props, State> {
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
    }

    selectText = () => {
        if (this.input.current) {
            this.input.current.select();
        }
    }

    render() {
        const { value } = this.state;
        const { input, updateValue, selectText, reset } = this;
        return (
            <div>
                <div>Focusing with ref</div>
                <div>{value}</div>
                <input
                    ref={input}
                    value={value}
                    onChange={updateValue}
                    onFocus={selectText} />
                <button onClick={reset}>Reset</button>
            </div>
        )
    }
}
