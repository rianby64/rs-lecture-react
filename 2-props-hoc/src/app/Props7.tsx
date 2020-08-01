
import * as React from 'react';
import { Props1 } from './Props1';
import { Props6 } from './Props6';

interface State {
    name: string;
    surname: string;
    address: string;
}

export class Props7 extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            address: '',
        }
    }

    changeName = (name: string) => {
        this.setState({
            ...this.state,
            name
        });
    }

    changeSurname = (surname: string) => {
        this.setState({
            ...this.state,
            surname
        });
    }

    changeAddress = (address: string) => {
        this.setState({
            ...this.state,
            address
        });
    }

    submit = (value: string) => {
        console.log('submiting a value', value);
    }

    render() {
        const { name, surname, address } = this.state;
        return (
            <div>
                <Props1 {...this.state} />

                <Props6 placeholder="name"   
                    value={name}
                    submit={this.submit}
                    change={this.changeName} />
                <Props6 placeholder="surname"
                    value={surname}
                    submit={this.submit}
                    change={this.changeSurname} />
                <Props6 placeholder="address"
                    value={address}
                    submit={this.submit}
                    change={this.changeAddress} />
            </div>
        )
    }
}
