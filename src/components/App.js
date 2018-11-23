import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import LoginForm from './LoginForm';
import HomePage from './HomePage';

const NotFoundPage = () => <h1>404 Not Found Page</h1>; // Sample component for Wrong Routes

export const history = createHistory();

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <PublicRoute exact path="/" component={LoginForm} />
          <PrivateRoute path="/home" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}
