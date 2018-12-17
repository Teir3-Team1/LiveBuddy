import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Grid } from 'semantic-ui-react';
import * as actions from '../../../actions';
import SideBar from '../../layout/SideBar/SideBar';
import NavBar from '../../layout/NavBar/Navbar';
export class HomePage extends Component {
  
  render() {
    const {settings}=this.props
    return (
      <Grid columns="equal">
        <Grid.Column
        width={3}   
        >
           <SideBar/>
        </Grid.Column>
        <Grid.Column
        style={{background:`${settings.colors.colorWhite}`,color:`${settings.colors.colorBlack}`,
    paddingLeft: '0rem'}}
        >
        <NavBar/>
        
        </Grid.Column>
      </Grid>
    );
  }
}


const mapStateToProps=(state)=>({
   settings:state.settings
})

export default connect(
  mapStateToProps,
  actions
)(HomePage);
