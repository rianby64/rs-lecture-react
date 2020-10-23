import React from 'react';

export class ErrorBoundary extends React.Component {
    render() {
        return (
            <>
                <div>This is something</div>
                { this.props.children }
            </>
        )
    }
}
