import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginForm from './LoginForm';

const HomePage = () => <h1>Home Page</h1>; // Sample component for Home Page
const NotFoundPage = () => <h1>404 Not Found Page</h1>; // Sample component for Wrong Routes

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
