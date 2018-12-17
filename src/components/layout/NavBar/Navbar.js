import React, { Component } from 'react'
import { Dropdown,Menu,Input,Icon, Segment} from 'semantic-ui-react';
import * as actions from '../../../actions/authActions';
import { connect } from 'react-redux';
class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const {activeItem}=this.state;
    const {currentUser}=this.props.auth;
    return (
        <Segment>
          <Menu  secondary fluid 
          >
              <Menu.Item >
                <Input className='icon' icon='search' placeholder='Search...' />
              </Menu.Item>

              <Menu.Menu position="right">  
                  <Menu.Item name='comment' active={activeItem === 'comment'} onClick={this.handleItemClick}>
                      <Icon name='comment' />
                      Messages
                  </Menu.Item>
                  <Menu.Item name='bell' active={activeItem === 'bell'} onClick={this.handleItemClick}>
                      <Icon name='bell' />
                      Notifications
                  </Menu.Item>
                  <Menu.Item>
                      <Dropdown labeled item text={`${currentUser.displayName}`}  >
                      <Dropdown.Menu>
                        <Dropdown.Item>Profile</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item onClick={this.props.logout}>Logout</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Menu.Item>
                  
              </Menu.Menu>   
          </Menu>
          
        </Segment>
   
    )
  }
}

const mapStateToProps=(state)=>({
    auth:state.auth
});

export default connect(mapStateToProps,actions)(NavBar);
