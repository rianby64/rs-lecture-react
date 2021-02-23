
import * as React from 'react';
import { useState } from 'react';

export function MouseTrackerHook() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setPosition({
            x: event.clientX,
            y: event.clientY
        });
    }
  
    return (
        <div style={{ height: '100%' }} onMouseMove={handleMouseMove}>
            <p>The current mouse position is ({position.x}, {position.y})</p>
        </div>
    );
}
  