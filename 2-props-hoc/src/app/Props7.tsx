
import * as React from 'react';
import { Props1 } from './Props1';
import { Props as Props6 } from './Props6';

interface State {
    name: string;
    surname: string;
    address: string;
}

interface Props {
    HocExample: () => React.ComponentType<Props6>;
}

export class Props7 extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            address: '',
        }

        this.MyHOC = props.HocExample(); // https://reactjs.org/docs/higher-order-components.html#dont-use-hocs-inside-the-render-method
    }

    MyHOC: React.ComponentType<Props6> | null = null;

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

        const MyHOC = this.MyHOC;
        if (!MyHOC) {
            return (
                <div>Where is the HocExample?</div>
            );
        }

        return (
            <div>
                <Props1 {...this.state} />
                <MyHOC placeholder="name"   
                    value={name}
                    submit={this.submit}
                    change={this.changeName} />
                <MyHOC placeholder="surname"
                    value={surname}
                    submit={this.submit}
                    change={this.changeSurname} />
                <MyHOC placeholder="address"
                    value={address}
                    submit={this.submit}
                    change={this.changeAddress} />
            </div>
        )
    }
}
