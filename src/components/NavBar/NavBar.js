import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, List, ListItem, Hidden } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { Menu, Close } from '@material-ui/icons';
import { tabValues } from '../../utils/appUtils';
import logo from '../../utils/images/pls_navbar_logo.png';

const useStyles = makeStyles(theme => ({
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
    zIndex: 999,
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    width: '40%',
    height: '100%',
    '& a': {
      width: '100%',
      color: 'inherit',
    },
  },
  logo: {
    padding: 5,
    width: '45px',
    height: '45px',
    '&:hover': {
      width: '48px',
      height: '48px',
    },
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      marginLeft: 0,
    },
    fontSize: 22,
    fontWeight: 'bold',
  },
  buttonCollapse: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    boxShadow: 'none',
  },
  padding: {
    paddingRight: 30,
    cursor: 'pointer',
  },
  tabs: {
    width: '65%',
  },
  tab: {
    minWidth: 60,
    paddingLeft: 0,
    paddingRight: 0,
  },
  labelContainer: {
    paddingLeft: 0,
    paddingRight: 0,
    fontSize: '5px',
  },
  list: {
    height: '100%',
    padding: 0,
    '& .active': {
      fontWeight: 'bold',
    },
  },
  listItem: {
    display: 'flex',
    justifyContent: 'center',
    padding: 20,
  },
  collapse: {
    position: 'sticky',
    width: '100%',
    top: 60,
    background: 'white',
    height: 0,
    overflow: 'hidden',
    transition: 'height 300ms',
    borderBottom: '1px solid #35353520',
    zIndex: 1000,
  },
  open: {
    height: 375,
    boxShadow: '0px 10px 15px #35353520',
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const valueOnLoad =
    window.location.hash.split('/').length === 2 &&
    window.location.hash.split('/')[1].toLowerCase();
  const [value, setValue] = useState(
    tabValues.find(val => val === valueOnLoad) || 'home',
  );
  const [open, setMenuOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="sticky" className={classes.appBar} color="transparent">
        <div className={classes.brand}>
          <a href="/pls/" className={classes.brand}>
            <img src={logo} alt="pls-logo" className={classes.logo} />
            <Hidden only="xs">
              <div className={classes.title}>Pete's Language Services</div>
            </Hidden>
          </a>
        </div>
        <Hidden mdUp>
          <IconButton onClick={() => setMenuOpen(!open)}>
            {open ? <Close /> : <Menu />}
          </IconButton>
        </Hidden>
        <Hidden smDown>
          <Tabs
            indicatorColor="primary"
            className={classes.tabs}
            value={value}
            onChange={handleChange}
            variant="fullWidth"
          >
            <Tab
              to="/home"
              value="home"
              component={NavLink}
              label="Home"
              className={classes.tab}
            />
            <Tab
              to="/individual"
              value="individual"
              component={NavLink}
              label="Individual Services"
              className={classes.tab}
            />
            <Tab
              to="/professional"
              value="professional"
              component={NavLink}
              label="Professional Services"
              className={classes.tab}
            />
            <Tab
              to="/business"
              value="business"
              component={NavLink}
              label="Business Services"
              className={classes.tab}
            />
            <Tab
              to="/test"
              value="test"
              component={NavLink}
              label="Level Test"
              className={classes.tab}
            />
            <Tab
              to="/contact"
              value="contact"
              component={NavLink}
              label="Contact Form"
              className={classes.tab}
            />
          </Tabs>
        </Hidden>
      </AppBar>

      <Hidden mdUp>
        <div className={`${classes.collapse} ${open ? classes.open : ''}`}>
          {/* <Collapse in={open}> */}
          <List className={classes.list}>
            <ListItem
              key="home"
              active={(value === 'home').toString()}
              button
              divider
              onClick={() => {
                setValue('home');
                setMenuOpen(false);
              }}
              to="/home"
              component={NavLink}
              className={classes.listItem}
            >
              Home
            </ListItem>
            <ListItem
              key="individual"
              active={(value === 'individual').toString()}
              button
              divider
              onClick={() => {
                setValue('individual');
                setMenuOpen(false);
              }}
              to="/individual"
              component={NavLink}
              className={classes.listItem}
            >
              Individual Services
            </ListItem>
            <ListItem
              key="professional"
              active={(value === 'professional').toString()}
              button
              divider
              onClick={() => {
                setValue('professional');
                setMenuOpen(false);
              }}
              to="/professional"
              component={NavLink}
              className={classes.listItem}
            >
              Professional Services
            </ListItem>
            <ListItem
              key="business"
              active={(value === 'business').toString()}
              button
              divider
              onClick={() => {
                setValue('business');
                setMenuOpen(false);
              }}
              to="/business"
              component={NavLink}
              className={classes.listItem}
            >
              Business Services
            </ListItem>
            <ListItem
              key="test"
              active={(value === 'test').toString()}
              button
              divider
              onClick={() => {
                setValue('test');
                setMenuOpen(false);
              }}
              to="/test"
              component={NavLink}
              className={classes.listItem}
            >
              Level Test
            </ListItem>
            <ListItem
              key="contact"
              active={(value === 'contact').toString()}
              button
              onClick={() => {
                setValue('contact');
                setMenuOpen(false);
              }}
              to="/contact"
              component={NavLink}
              className={classes.listItem}
            >
              Contact Form
            </ListItem>
          </List>
          {/* </Collapse> */}
        </div>
      </Hidden>
    </>
  );
};

export default NavBar;
