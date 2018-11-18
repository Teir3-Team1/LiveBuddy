import React from 'react';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';

const LoginForm = () => (
  <div className="login-form">
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
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
          />
          <Button
            className="login-button"
            content="Facebook"
            color="facebook"
            icon="facebook f"
            labelPosition="left"
            size="huge"
          />
          <Button
            className="login-button"
            content="Twitter"
            color="twitter"
            icon="twitter"
            labelPosition="left"
            size="huge"
          />
          <Button
            className="login-button"
            content="GitHub"
            color="black"
            icon="github"
            labelPosition="left"
            size="huge"
          />
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
);

export default LoginForm;
