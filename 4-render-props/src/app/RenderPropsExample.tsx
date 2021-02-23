
import * as React from 'react';

export interface PropsExample1 {
    name: string;
    surname: string;
}

export class ComponentAsClass extends React.Component<PropsExample1> {
    render() {
        const { name, surname } = this.props;
        return (
            <div>
                Name: {name}, Surname: {surname}
            </div>
        );
    }
}

export function ComponentAsFunction(props: PropsExample1) {
    const { name, surname } = props;
    return (
        <div>
            Name: {name}, Surname: {surname}
        </div>
    );
}

interface PropsWithRenderFn extends PropsExample1 {
    render: (props: PropsExample1) => JSX.Element;
}

export class ComponentWithRP extends React.Component<PropsWithRenderFn> {
    render() {
        const { render, name, surname } = this.props;
        return <div>
            Here we go!
            {
                render({
                    name: name,
                    surname: surname,
                })
            }
        </div>
    }
}
