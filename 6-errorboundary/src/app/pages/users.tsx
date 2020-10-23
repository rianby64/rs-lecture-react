import React from 'react';
import { Link } from 'react-router-dom';

export function Users() {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <div>This is the users page</div>
      </>
    )
}
