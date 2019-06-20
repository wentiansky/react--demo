import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <LoginButton />
        <ul>
          <li><Link to="/public">public page</Link></li>
          <li><Link></Link></li>
        </ul>
      </div>
    </Router>
  )
}

export default App;
