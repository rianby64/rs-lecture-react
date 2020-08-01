
import * as React from 'react';

interface Props {
    value: string;
    placeholder?: string;
    submit?: (value: string) => void;
    change?: (newValue: string) => void;
}

export class Props6 extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    static defaultProps = {
        placeholder: 'Default placeholder',
        submit: (_: string) => {
            throw new Error('undefined submit function via props');
        },
        change: (_: string) => {
            throw new Error('undefined change function via props');
        }
    }

    onChange = (event: React.ChangeEvent<HTMLInputElement>): void =>  {
        const { change } = this.props;
        if (change) {
            change(event.target.value);
        } else {
            throw new Error('something is broke with the implementation');
        }
    }

    onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        const { submit, value } = this.props;
        event.preventDefault();
        
        if (submit) {
            submit(value);
        } else {
            throw new Error('something is broke with the implementation');
        }
    }

    render() {
        const { onSubmit, onChange,
                props: { placeholder, value } } = this;
        return (
            <form onSubmit={onSubmit}>
                <input
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder} />
            </form>
        )
    }
}
