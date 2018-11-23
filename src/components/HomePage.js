import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import * as actions from '../actions';

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Button content="logout" primary onClick={this.props.logout} />
      </div>
    );
  }
}

export default connect(
  undefined,
  actions
)(HomePage);
