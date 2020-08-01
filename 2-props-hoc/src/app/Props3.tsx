
import * as React from 'react';
import { Props1 } from './Props1';

interface Props {
    extra: {
        secretCode: string;
        permisions: string;
    };
    user: {
        name:    string;
        surname: string;
        address: string;
    };
}

export class Props3 extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { user, extra: { secretCode, permisions} } = this.props;
        return (
            <div>
                <Props1 {...user} />
                <div>secretCode: {secretCode}</div>
                <div>perissions: {permisions}</div>
            </div>
        )
    }
}
