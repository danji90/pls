import React, { useState} from 'react';
import {
  HashRouter as Router,
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
import Individual from '../Individual/Individual.js';
import { tabValues } from '../../utils/appUtils';

const Main = () => {
  return (
    <>
      <Router basename="/">
      {/* <Router> */}
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
              <Individual />
              <Footer />
            </TabPanel>
          </Route>
          <Route path="/professional">
            <TabPanel index={2}>
              Professional
              <Footer />
            </TabPanel>
          </Route>
          <Route path="/business">
            <TabPanel index={3}>
              Business
              <Footer />
            </TabPanel>
          </Route>
          <Route path="/test">
            <TabPanel index={4}>
              Level test
              <Footer />
            </TabPanel>
          </Route>
          <Route path="/contact">
            <TabPanel index={5}>
              Contact Form
              <Footer />
            </TabPanel>
          </Route>
          <Route exact path="/*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  )
}
  
export default Main;