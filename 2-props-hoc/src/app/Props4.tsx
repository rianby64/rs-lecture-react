
import * as React from 'react';

interface Props {
    value: string;
    placeholder: string;
    submit?: (value: string) => void;
}

interface State {
    value: string;
}

export class Props4 extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    onChange = (event: React.ChangeEvent<HTMLInputElement>): void =>  {
        this.setState({
            value: event.target.value
        });
    }

    onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        const { submit } = this.props;
        const { value } = this.state;
        event.preventDefault();
        if (submit) {
            submit(value);
        } else {
            throw new Error('undefined submit function via props');
        }
    }

    render() {
        const { value } = this.state;
        const { placeholder } = this.props;
        const { onSubmit, onChange } = this;
        return (
            <form onSubmit={onSubmit}>
                <input value={value} onChange={onChange} placeholder={placeholder} />
            </form>
        )
    }
}
