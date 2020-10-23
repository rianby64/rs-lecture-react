
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';

import { About } from './pages/about';
import { Home } from './pages/home';
import { Users } from './pages/users';

render(
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>,
    document.getElementById("root")
);
