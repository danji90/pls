import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Tabs,
  Tab,
  List,
  ListItem,
  Hidden,
  Collapse,
  } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { moveToSection } from '../../utils/appUtils.js';
import services from '../../utils/service_data.js';
import { ReactComponent as PLSNavbarLogo } from '../../utils/images/pls_navbar_logo.svg';
import Dropdown from '../Dropdown/Dropdown';
import './NavBar.css'

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.down('sm')]: {
      padding: '0',
    },
    display: 'flex',
    alignItems: 'center',
    height: 60,
    backgroundColor: theme.colors.primary,
    top: 0,
    borderBottom: '1px solid #35353520',
    boxShadow: '0px 10px 15px #35353520',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    width: '30%',
    height: '100%',
    '& a': {
      width: '100%',
      color: 'inherit',
    },
    '& svg': {
    padding: 5,
    height: 45,
    width: 45,
    },
  },
  logo: {
    [theme.breakpoints.down('xs')]: {
      width: 120,
    },
    width: 145,
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      marginLeft: 0,
    },
    fontSize: 22,
    fontWeight: 500,
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
  tabs: {
    width: '65%',
  },
  labelContainer: {
    paddingLeft: 0,
    paddingRight: 0,
    fontSize: "5px"
  },
  collapseCategories: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    top: 60,
    left: 'auto',
    right: 0,
    background: 'white',
    zIndex: 1100,
    boxShadow: '0px 10px 15px #35353520',
    fontWeight: 'bold',
    padding: 0,
  },
  dropdown: {
    position: 'fixed',
    width: '100%',
    backgroundColor: 'white',
    top: 60,
    zIndex: 1100,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const tabStyle = {
  minWidth: 60,
  paddingLeft: 0,
  paddingRight: 0,
};

const NavBar = () => {
  const classes = useStyles();
  const [value, setValue] = useState(false);
  const [open, setMenuOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* NavBar */}
      <AppBar position="fixed" className={classes.appBar} color="transparent">
        <div className={classes.brand}>
          <a href="/" className={classes.brand}>
            <PLSNavbarLogo className="navbar-logo" />
            <Hidden only='xs'>
              <div className={classes.title}>Pete's Language Services</div>
            </Hidden>
          </a>
        </div>

        <Hidden mdUp>
          <IconButton onClick={() => setMenuOpen(!open)}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Hidden>

        <Hidden smDown>
          <Tabs
            indicatorColor='primary'
            className={classes.tabs}
            value={value}
            onChange={handleChange}
            variant="fullWidth"
          >
            <Tab to='/home' component={NavLink} label="Home" style={tabStyle} />
            <Tab to='/individual' component={NavLink} label="Individual Services" style={tabStyle} />
            <Tab to='/professional' component={NavLink} label="Professional Services" style={tabStyle} />
            <Tab to='/business' component={NavLink} label="Business Services" style={tabStyle} />
            <Tab to='/test' component={NavLink} label="Level Test" style={tabStyle} />
            <Tab to='/contact' component={NavLink} label="Contact Form" style={tabStyle} />
          </Tabs>
        </Hidden>
      </AppBar>
      <Hidden mdUp>
        <Collapse in={open} >
          <div tabIndex={0} role="button">
            <List className = {classes.collapseCategories} >
              <ListItem key={0} button divider onClick={()=>{
                  setMenuOpen(false);
                }}
                to='/home' component={NavLink}
                className={classes.listItem}>
                  Home
              </ListItem>
              <ListItem key={1} button divider onClick={()=>{
                  setMenuOpen(false);
                }}
                to='/individual' component={NavLink}
                className={classes.listItem}>
                Individual Services
              </ListItem>
              <ListItem key={2} button divider onClick={()=>{
                  setMenuOpen(false);
                }}
                to='/professional' component={NavLink}
                className={classes.listItem}>
                Professional Services
              </ListItem>
              <ListItem key={3} button divider onClick={()=>{
                  setMenuOpen(false);
                }}
                to='/business' component={NavLink}
                className={classes.listItem}>
                Business Services
              </ListItem>
              <ListItem key={4} button divider onClick={()=>{
                  setMenuOpen(false);
                }}
                to='/test' component={NavLink}
                className={classes.listItem}>
                Level Test
              </ListItem>
              <ListItem key={5} button onClick={()=>{
                  setMenuOpen(false);
                }}
                to='/contact' component={NavLink}
                className={classes.listItem}>
                Contact Form
              </ListItem>
            </List>
          </div>
        </Collapse>
      </Hidden>
    </>
  )
}

export default NavBar;