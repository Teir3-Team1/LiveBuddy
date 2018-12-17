import React, { Component } from 'react'
import { Menu, Image, Button, Icon, Divider, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import logo from '../../../assets/LiveBuddy.png';

class SideBar extends Component {
  handleItemClick = name => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}


    const {settings}=this.props
    return (
      <Menu size="large"
      inverted
      fixed="left"
      vertical
      
      style={{background:`${settings.colors.primaryColor}`,color:`${settings.colors.colorWhite}`}}
      >
      <Menu.Item>
            <Image src={logo} style={{margin:'0 auto'}}/>       
      </Menu.Item>
      <Menu.Item>
          <Button style={{margin:'0 auto',background:`${settings.colors.secondaryColor}` ,color:`${settings.colors.colorWhite}`}} >
            <Icon name="video" inverted />
            Start Stream
          </Button>
      </Menu.Item>
      <Divider/>

      <Menu.Item>
          <Menu.Header>Home</Menu.Header>
         
          <Menu.Header>Browse</Menu.Header>
          <Menu.Item name="subscriptions"  active={activeItem === 'subscriptions'}
          onClick={this.handleItemClick}>
                <Header as="h3" inverted>Subscriptions</Header>
          </Menu.Item>
          <Menu.Menu style={{transform:'translateX(30px)'}}>
            <Menu.Item
              name='devchan'
              active={activeItem === 'devchan'}
              onClick={this.handleItemClick}
              position="right"
            />
            <Menu.Item
              name='animemaid'
              active={activeItem === 'animemaid'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Divider/>
         
          <Menu.Header>Friends</Menu.Header>
         
          <Menu.Menu style={{transform:'translateX(30px)'}}>
            <Menu.Item
              name='devchan'
              active={activeItem === 'devchan'}
              onClick={this.handleItemClick}
              position="right"
            />
            <Menu.Item
              name='animemaid'
              active={activeItem === 'animemaid'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>

    
      
      </Menu>
    )
  }
}



const mapStateToProps=(state)=>({
  settings:state.settings
})

export default connect( mapStateToProps,
  null)(SideBar);
