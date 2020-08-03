import React, { useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Tabs,
  Tab,
  List,
  ListItem,
  Hidden,
  Collapse,
  Box,
  Typography
} from '@material-ui/core';

import TabPanel from '../TabPanel/TabPanel';
import Home from '../Home/Home';
import Service from '../Service/Service';
import LandingPage from '../LandingPage/LandingPage';
import sectionData from '../../utils/service_data.js';
import './Main.css';
import NavBar from '../NavBar/NavBar.js';

const Main = () => {
  const [value, setValue] = useState(false);
  const [open, setMenuOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <TabPanel index={0}>
              <LandingPage />
            </TabPanel>
          </Route>
          <Route exact path="/home">
            <TabPanel index={0}>
              <Home />
            </TabPanel>
          </Route>
          <Route path="/individual">
            <TabPanel index={1}>
              Individual
            </TabPanel>
          </Route>
          <Route path="/professional">
            <TabPanel index={2}>
              Professional
            </TabPanel>
          </Route>
          <Route path="/business">
            <TabPanel index={3}>
              business
            </TabPanel>
          </Route>
          <Route path="/test">
            <TabPanel index={4}>
              Level test
            </TabPanel>
          </Route>
          <Route path="/contact">
            <TabPanel index={5}>
              Contact Form
            </TabPanel>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  )
}
  
export default Main;