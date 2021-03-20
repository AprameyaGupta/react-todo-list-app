import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import ViewsTodos from './ViewTodos';
import RegisterTodos from './RegisterTodos';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Single Page Application</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/viewTodos">Views Todos</Link>
              </li>
              <li>
                <Link to="/registerTodos">Register Todos</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/viewTodos">
              <ViewsTodos />
            </Route>
            <Route path="/registerTodos">
              <RegisterTodos />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
