import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { moveToSection } from '../../utils/appUtils.js';
import './NavBar.css'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function NavBar() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="menu">
            <AppBar position="static">
              <Tabs centered value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Home" onClick={() => moveToSection('home')}/>
                <Tab label="Individual services" onClick={e => console.log(e.currentTarget)}/>/>
                <Tab label="Business services" />
                <Tab label="Professional services" />
                <Tab label="Level Test" />
                <Tab label="Contact Form" />
              </Tabs>
            </AppBar>
        </div>
      )
  }
  
  
  
  export default NavBar;