import React, { useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import TabPanel from '../TabPanel/TabPanel';
import Home from '../Home/Home';
import Service from '../Service/Service';
import LandingPage from '../LandingPage/LandingPage';
import Footer from '../Footer/Footer';
import sectionData from '../../utils/service_data.js';
import './Main.css';
import NavBar from '../NavBar/NavBar.js';
import { tabValues } from '../../utils/appUtils';

const Main = () => {
  return (
    <>
      <Router basename="/pls">
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <TabPanel index={0} >
              <Home />
              <Footer />
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
              Business
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
          <Route exact path="/*">
            {/* Redirect to home for all other paths */}
            <Redirect to="/home" />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  )
}
  
export default Main;