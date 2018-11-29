import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Header, Image, Segment } from 'semantic-ui-react';

import * as actions from '../actions';
import { providers } from '../config/firebase';

const BUTTONS = [
  {
    name: 'google.com',
    content: 'Google',
    color: 'google plus',
    icon: 'google'
  },
  {
    name: 'facebook.com',
    content: 'Facebook',
    color: 'facebook',
    icon: 'facebook f'
  },
  {
    name: 'twitter.com',
    content: 'Twitter',
    color: 'twitter',
    icon: 'twitter'
  },
  {
    name: 'github.com',
    content: 'Github',
    color: 'black',
    icon: 'github'
  }
];

export class LoginForm extends Component {
  handleClick = e => {
    const authProvider = providers.filter(
      provider => e.target.name === provider.providerId
    );
    this.props.login(authProvider[0]);
  };

  renderbuttons = () =>
    BUTTONS.map(({ name, content, color, icon }) => (
      <Button
        key={name}
        className="login-button"
        name={name}
        content={content}
        color={color}
        icon={icon}
        labelPosition="left"
        size="huge"
        onClick={this.handleClick}
      />
    ));

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
            <Segment className="flex">{this.renderbuttons()}</Segment>
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
