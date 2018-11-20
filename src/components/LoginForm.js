import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Header, Image, Segment } from 'semantic-ui-react';

import * as actions from '../actions';

export class LoginForm extends Component {
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
                content="Google"
                color="google plus"
                icon="google"
                labelPosition="left"
                size="huge"
                onClick={this.props.loginWithGoogle}
              />
              <Button
                className="login-button"
                content="Facebook"
                color="facebook"
                icon="facebook f"
                labelPosition="left"
                size="huge"
                onClick={this.props.loginWithFacebook}
              />
              <Button
                className="login-button"
                content="Twitter"
                color="twitter"
                icon="twitter"
                labelPosition="left"
                size="huge"
                onClick={this.props.loginWithTwitter}
              />
              <Button
                className="login-button"
                content="GitHub"
                color="black"
                icon="github"
                labelPosition="left"
                size="huge"
                onClick={this.props.loginWithGithub}
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
