
import * as React from 'react';

interface State {
    x: number;
    y: number;
}

interface Position {
    x: number;
    y: number;
}

export class MousePosition extends React.Component<Position> {
    render() {
        const { x, y } = this.props;
        return (
            <p>The current mouse position is ({x}, {y})</p>
        );
    }
}

export class MouseTracker1 extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        };
    }
  
    handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }
  
    render() {
        return (
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                <h1>Move the mouse around!</h1>
                <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
            </div>
        );
    }
}
  
// Look at the HARD-OUT-CODED (HOC)Component
export class MouseTracker2 extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        };
    }
  
    handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }
  
    render() {
        return (
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                <h1>Move the mouse around!</h1>
                <MousePosition x={this.state.x} y={this.state.y} />
            </div>
        );
    }
}

// The HOC example
export function WithMouseComponent(Component: React.ComponentType<Position>) {
    return class extends React.Component<{}, State> {
        constructor(props: {}) {
            super(props);
            this.state = {
                x: 0,
                y: 0
            };
        }
      
        handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            this.setState({
                x: event.clientX,
                y: event.clientY
            });
        }
      
        render() {
            return (
                <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                    <h1>Move the mouse around!</h1>
                    <Component x={this.state.x} y={this.state.y} />
                </div>
            );
        }
    }
}
