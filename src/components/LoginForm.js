import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Header, Image, Segment } from 'semantic-ui-react';

import * as actions from '../actions';
import { providers } from '../config/firebase';

export class LoginForm extends Component {
  handleClick = e => {
    const authProvider = providers.filter(
      provider => e.target.name === provider.providerId
    );
    this.props.login(authProvider[0]);
  };

  render() {
    return (
      <div className="login-form">
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Image src="/images/logo.png" centered />
            <Header as="h2" color="grey" textAlign="center">
              Log-in to your account
            </Header>
            <Segment className="flex">
              <Button
                className="login-button"
                name="google.com"
                content="Google"
                color="google plus"
                icon="google"
                labelPosition="left"
                size="huge"
                onClick={this.handleClick}
              />
              <Button
                className="login-button"
                name="facebook.com"
                content="Facebook"
                color="facebook"
                icon="facebook f"
                labelPosition="left"
                size="huge"
                onClick={this.handleClick}
              />
              <Button
                className="login-button"
                name="twitter.com"
                content="Twitter"
                color="twitter"
                icon="twitter"
                labelPosition="left"
                size="huge"
                onClick={this.handleClick}
              />
              <Button
                className="login-button"
                name="github.com"
                content="GitHub"
                color="black"
                icon="github"
                labelPosition="left"
                size="huge"
                onClick={this.handleClick}
              />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(
  undefined,
  actions
)(LoginForm);
