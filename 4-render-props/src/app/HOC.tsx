
import * as React from 'react';

interface PropsExample2 {
    name: string;
    surname: string;
}


interface PropsExample3 {
    namereal: string;
    surnamereal: string;
}

export function WithComponentNoProps(Component: React.ComponentType) {
    return class extends React.Component {
        render() {
            return (
                <div>
                    <div>This is my HOC</div>
                    <Component />
                </div>
            )
        }
    }
}

export function WithComponent(Component: React.ComponentType<PropsExample2>) {
    return class extends React.Component<PropsExample3> {
        render() {
            return (
                <div>
                    <div>This is my HOC</div>
                    <Component
                        name={this.props.namereal}
                        surname={this.props.surnamereal} />
                </div>
            )
        }
    }
}
