import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <div>
          Home page
        </div>
      </>
    )
}
