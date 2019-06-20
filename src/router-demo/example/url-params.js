import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function ParamsExample() {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/aaa">AAA</Link>
          </li>
          <li>
            <Link to="/bbb">BBB</Link>
          </li>
          <li>
            <Link to="/ccc">CCC</Link>
          </li>
        </ul>

        <Route path="/:id" component={Child} />

        {/*
          * It's possible to use regular expressions to control what param values should be matched.
          * "/order/asc"  - matched
          * "/order/desc" - matched
          * "/order/foo"  - not matched
        */}
        <Route
          path="/order/:direction(asc|desc)"
          component={Regex}
        />
      </div>
    </Router>
  );
}

function Child({ match }) {
  return (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  );
}

function Regex({ match }) {
  return (
    <div>
      <h3>Only asc/desc are allowed: {match.params.direction}</h3>
    </div>
  );
}

export default ParamsExample;
