import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

function AuthExample() {
  return (
    <Router>
      <div>
        <LoginButon />
        <ul>
          <li><Link to="/public">Public page</Link></li>
          <li><Link to="/protected">Protected page</Link></li>
        </ul>

        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} />
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticated(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  Logout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const LoginButon = withRouter(
  ({ history }) => 
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.Logout(() => history.push("/"));
          }}
        >
          Login out
        </button>
      </p>
    ) : (
      <p>You are not login</p>
    )
);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect 
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

function Public() {
  return <h3>Public</h3>;
}

function Protected() {
  return <h3>Protected</h3>;
}

class Login extends Component {
  state = { redirectToReferrer: false };

  login = () => {
    fakeAuth.authenticated(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;
    if (redirectToReferrer) return <Redirect to={from} />;
    return (
      <div>
        <p>You must login to view the page at {from.pathname}</p>
        <button onClick={this.login}>login</button>
      </div>
    );
  }
}

export default AuthExample;