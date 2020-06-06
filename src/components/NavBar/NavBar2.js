import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Dropdown from '../Dropdown/Dropdown';
import services from '../../utils/service_data.js';
import { moveToSection } from '../../utils/appUtils.js';

import './NavBar.css'

const styleSheet = {
  list : {
    width : 200,
  },
  padding : {
    paddingRight : 30,
    cursor : "pointer",
  },

  sideBarIcon : {
    padding : 0,
    color : "white",
    cursor : "pointer",
  },
  toolBar: {
    // minHeight: 40,
  }
}

const createMenuItems = (serviceArray, category) => {
  return serviceArray
    .filter(service => service.category === category)
    .map(service => {
      return {
        id: service.id,
        title: service.title
      }
    })
}

class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {drawerActivate:false, drawer:false};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount(){
    if(window.innerWidth <= 600){
      this.setState({drawerActivate:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 600){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }
    });
  }
  
  //Small Screens
  createDrawer(){
    console.log(this.props.classes);
    return (
      <div className="menu">
        <AppBar>
          <Toolbar>
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <Typography color="inherit" variant = "headline">PLS</Typography>
              <Typography color="inherit" variant = "headline"></Typography>
              <MenuIcon
                className = {this.props.classes.sideBarIcon}
                onClick={()=>{this.setState({drawer:true})}} />
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
         open={this.state.drawer}
         onClose={()=>{this.setState({drawer:false})}}
         onOpen={()=>{this.setState({drawer:true})}}>
           <div
             tabIndex={0}
             role="button"
             >
            <List className = {this.props.classes.list}>
               <ListItem key = {1} button divider onClick={()=>{
                 this.setState({drawer:false});
                 return moveToSection('home');
                 }}>
                  Home
               </ListItem>
               <ListItem key = {2} button divider><Dropdown tabTitle="Individual services" menuItems={createMenuItems(services, 'individual')}/></ListItem>
               <ListItem key = {3} button divider><Dropdown tabTitle="Business services" menuItems={createMenuItems(services, 'business')}/></ListItem>
               <ListItem key = {4} button divider><Dropdown tabTitle="Professional services" menuItems={createMenuItems(services, 'professional')}/></ListItem>
               <ListItem key = {6} button divider onClick={()=>{this.setState({drawer:false})}}>Level Test</ListItem>
               <ListItem key = {7} button divider onClick={()=>{this.setState({drawer:false})}}>Contact Form</ListItem>
             </List>
         </div>
       </SwipeableDrawer>
      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){
    const {classes} = this.props
    return (
      <AppBar position="static">
        <Toolbar className = {this.props.classes.toolBar}>
          <Typography variant = "headline" style={{flexGrow:1}} color="inherit" >PLS</Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" onClick={() => moveToSection('home')}>About</Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" >
            <Dropdown tabTitle="Individual services" menuItems={createMenuItems(services, 'individual')}/>
          </Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" >
            <Dropdown tabTitle="Business services" menuItems={createMenuItems(services, 'business')}/>
          </Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" >
            <Dropdown tabTitle="Professional services" menuItems={createMenuItems(services, 'professional')}/>
          </Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" >Level Test</Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" >Contact Form</Typography>
        </Toolbar>
      </AppBar>
    )
  }

  render(){
    return(
      <div className="menu">
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

NavBar.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withStyles(styleSheet)(NavBar);