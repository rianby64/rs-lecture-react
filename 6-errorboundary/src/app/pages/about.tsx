import React from 'react';
import { Link } from 'react-router-dom';

export function About() {
    return (
        <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <div>This is the about page</div>
        </>
    )
}
