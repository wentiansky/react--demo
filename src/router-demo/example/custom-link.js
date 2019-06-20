import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function CustomLinkExample() {
  return (
    <Router>
      <div>
        <MenuLink active={true} to="/" label="home" />
        <MenuLink to="/about" label="about" />
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

function MenuLink({ label, to, active }) {
  return (
    <Route
      path={to}
      exact={active}
      children={({ match }) => (
        <div className={match ? "selected" : ""}>
          {match ? "> " : ""}
          <Link to={to}>{label}</Link>
        </div>
      )}
    />
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

export default CustomLinkExample;