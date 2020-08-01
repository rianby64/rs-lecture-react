
import * as React from 'react';

interface Props {
    name:    string;
    surname: string;
    address: string;
}

export class Props1 extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { name, surname, address } = this.props;
        return (
            <div>
                <div>User profile</div>
                <div>{name}</div>
                <div>{surname}</div>
                <div>{address}</div>
            </div>
        )
    }
}
