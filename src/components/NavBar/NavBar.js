import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Tabs,
  Tab,
  List,
  ListItem,
  Hidden,
  Collapse
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
    width: '70%',
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
  minWidth: 50,
  paddingLeft: 0,
  paddingRight: 0,
};

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
  const [service, setServiceOpen] = useState()

  const handleMenu = (event, setMenuOpen) => {
    setMenuOpen(!open);
  };

  const handleChange = (event, newValue) => {
    setServiceOpen(service === newValue ? null : newValue);
  };
  

  return (
      <>
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
            <IconButton onClick={(e) => handleMenu(e, setMenuOpen)}>
              <MenuIcon />
            </IconButton>
          </Hidden>

          {/* <div className={classes.links}>
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
          </div> */}
          <Hidden smDown>
            <Tabs
              indicatorColor='primary'
              className={classes.tabs}
              value={service}
              onChange={handleChange}
              variant="fullWidth"
            >
              <Tab value="home" label="Home" style={tabStyle} classes={{ labelContainer: classes.labelContainer }} />
              <Tab value="individual" label="Individual Services" style={tabStyle} classes={{ labelContainer: classes.labelContainer }}/>
              <Tab value="professional" label="Professional Services" style={tabStyle} classes={classes.tabLabel}/>
              <Tab value="business" label="Business Services" style={tabStyle} classes={classes.tabLabel}/>
              <Tab value="test" label="Level Test" style={tabStyle} classes={classes.tabLabel}/>
              <Tab value="contact" label="Contact Form" style={tabStyle} classes={classes.tabLabel}/>
            </Tabs>
          </Hidden>
        </AppBar>

        <Hidden smDown>
          <Collapse
            className={classes.collapseCategories}
            in={service === 'individual'}
            >
            <Dropdown
              onClick={() => {
                setServiceOpen();
                setMenuOpen(false);
              }} 
              tabTitle="Individual services"
              menuItems={createMenuItems(services, 'individual')}
              />
          </Collapse>
        </Hidden>

        <Hidden mdUp>
          <Collapse
              in={open}
              >
                <div
                  tabIndex={0}
                  role="button"
                  >
                  <List className = {classes.collapseCategories} >
                    <ListItem key={1} button divider onClick={()=>{
                      setMenuOpen(false);
                      return moveToSection('home');
                      }}
                      className={classes.listItem}>
                        Home
                    </ListItem>
                    <ListItem key={2} button divider onClick={()=>{
                        setServiceOpen(service === 'individual' ? null : 'individual');
                      }}
                      className={classes.listItem}>
                      Individual Services
                    </ListItem>
                    <Collapse
                      style={{width: '100%'}}
                      in={service === 'individual'}
                      >
                      <Dropdown
                        onClick={() => {
                          setServiceOpen();
                          setMenuOpen(false);
                        }} 
                        tabTitle="Individual services"
                        menuItems={createMenuItems(services, 'individual')}
                        />
                    </Collapse>
                    <ListItem key={3} button divider onClick={()=>{
                        setServiceOpen(service === 'professional' ? null : 'professional');
                      }}
                      className={classes.listItem}>
                      Professional Services
                    </ListItem>
                    <Collapse
                      style={{width: '100%'}}
                      in={service === 'professional'}
                      >
                      <Dropdown
                        onClick={() => {
                          setServiceOpen();
                          setMenuOpen(false);
                        }} 
                        menuItems={createMenuItems(services, 'professional')}
                        />
                    </Collapse>
                    <ListItem key={4} button divider onClick={()=>{
                        setServiceOpen(service === 'business' ? null : 'business');
                      }}
                      className={classes.listItem}>
                      Business Services
                    </ListItem>
                    <Collapse
                      style={{width: '100%'}}
                      in={service === 'business'}
                      >
                      <Dropdown
                        onClick={() => {
                          setServiceOpen();
                          setMenuOpen(false);
                        }} 
                        tabTitle="Business services"
                        menuItems={createMenuItems(services, 'business')}
                        />
                    </Collapse>
                    <ListItem key={5} button divider onClick={()=>{
                        setServiceOpen();
                        setMenuOpen(false);
                        // return moveToSection('home');
                      }}
                      className={classes.listItem}>
                      Level Test
                    </ListItem>
                    <ListItem key={6} button onClick={()=>{
                        setServiceOpen();
                        setMenuOpen(false);
                        // return moveToSection('home');
                      }}
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