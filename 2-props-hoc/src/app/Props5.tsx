
import * as React from 'react';
import { Props1 } from './Props1';
import { Props4 } from './Props4';

interface State {
    name: string;
    surname: string;
    address: string;
}

export class Props5 extends React.Component<{}, State> {
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

    render() {
        const { name, surname, address } = this.state;
        return (
            <div>
                <Props1 {...this.state} />

                <Props4 placeholder="name" value={name} submit={this.changeName} />
                <Props4 placeholder="surname" value={surname} submit={this.changeSurname} />
                <Props4 placeholder="address" value={address} submit={this.changeAddress} />
            </div>
        )
    }
}
