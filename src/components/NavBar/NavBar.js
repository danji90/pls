import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  SwipeableDrawer,
  Hidden
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { moveToSection } from '../../utils/appUtils.js';
import services from '../../utils/service_data.js';
import { ReactComponent as PLSNavbarLogo } from '../../utils/images/pls_navbar_logo.svg';
import Dropdown from '../Dropdown/Dropdown';
import './NavBar.css'

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.down('sm')]: {
      padding: '0 20px',
    },
    display: 'flex',
    alignItems: 'center',
    height: 60,
    backgroundColor: theme.colors.primary,
    top: 0,
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  logo: {
    [theme.breakpoints.down('xs')]: {
      width: 120,
    },
    width: 145,
  },
  title: {
    [theme.breakpoints.down('md')]: {
      fontSize: 15,
      marginLeft: 0,
    },
    fontSize: 22,
    fontWeight: 500,
    marginLeft: 8,
  },
  links: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    display: 'flex',
    marginBottom: 2,
    '& a': {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      marginLeft: 10,
      marginBottom: 4,
      transition: 'all .3s ease',
    },
    '& a:hover': {
      color: theme.colors.secondary,
      borderBottom: `4px solid ${theme.colors.secondary}`,
    },
    '& .active': {
      fontWeight: 'bold',
    },
  },
  buttonCollapse: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    boxShadow: 'none',
  },
  padding : {
    paddingRight : 30,
    cursor : "pointer",
  },
}));

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

function NavBar() {
  const classes = useStyles();
  const [open, setMenuOpen] = useState(false);

  const handleMenu = (event, setMenuOpen) => {
    setMenuOpen(true);
  };

  return (
      <>
        <AppBar positionFixed className={classes.appBar} color="transparent">
          <div className={classes.brand}>
            <a href="/" className={classes.brand}>
              <PLSNavbarLogo className="navbar-logo" />
              <Hidden smDown>
                <div className={classes.title}>Pete's Language Services</div>
              </Hidden>
            </a>
          </div>

          <div className={classes.buttonCollapse}>
            <IconButton onClick={(e) => handleMenu(e, setMenuOpen)}>
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              open={open}
              onClose={()=>{setMenuOpen(false)}}
              onOpen={()=>{setMenuOpen(true)}}
              >
                <div
                  tabIndex={0}
                  role="button"
                  >
                  <List className = {classes.list}>
                    <ListItem key = {1} button divider onClick={()=>{
                      setMenuOpen(false);
                      return moveToSection('home');
                      }}>
                        About
                    </ListItem>
                    <ListItem key = {2} button divider><Dropdown onClick={() => setMenuOpen(false)} tabTitle="Individual services" menuItems={createMenuItems(services, 'individual')}/></ListItem>
                    <ListItem key = {3} button divider><Dropdown onClick={() => setMenuOpen(false)} tabTitle="Business services" menuItems={createMenuItems(services, 'business')}/></ListItem>
                    <ListItem key = {4} button divider><Dropdown onClick={() => setMenuOpen(false)} tabTitle="Professional services" menuItems={createMenuItems(services, 'professional')}/></ListItem>
                    <ListItem key = {6} button divider onClick={()=>setMenuOpen(false)}>Level Test</ListItem>
                    <ListItem key = {7} button divider onClick={()=>{setMenuOpen(false)}}>Contact Form</ListItem>
                  </List>
                </div>
            </SwipeableDrawer>
          </div>

          <div className={classes.links}>
            <Toolbar className = {classes.toolBar}>
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
          </div>
        </AppBar>
      </>
    )
  }
  
  
  
  export default NavBar;