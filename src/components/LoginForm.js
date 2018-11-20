import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Header, Image, Segment } from 'semantic-ui-react';

import * as actions from '../actions';
import {
  googleAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider,
  githubAuthProvider
} from '../config/firebase';

export class LoginForm extends Component {
  handleClick = e => {
    let provider;
    switch (e.target.name) {
      case 'facebook':
        provider = facebookAuthProvider;
        break;
      case 'twitter':
        provider = twitterAuthProvider;
        break;
      case 'github':
        provider = githubAuthProvider;
        break;
      default:
        provider = googleAuthProvider;
    }
    this.props.login(provider);
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
                name="google"
                content="Google"
                color="google plus"
                icon="google"
                labelPosition="left"
                size="huge"
                onClick={this.handleClick}
              />
              <Button
                className="login-button"
                name="facebook"
                content="Facebook"
                color="facebook"
                icon="facebook f"
                labelPosition="left"
                size="huge"
                onClick={this.handleClick}
              />
              <Button
                className="login-button"
                name="twitter"
                content="Twitter"
                color="twitter"
                icon="twitter"
                labelPosition="left"
                size="huge"
                onClick={this.handleClick}
              />
              <Button
                className="login-button"
                name="github"
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
