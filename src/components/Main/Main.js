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
            {/* <LandingPage /> */}
            <TabPanel index={0} >
              <Home />
              <Footer />
            </TabPanel>
          </Route>
          <Route path="/individual">
            <div style={{marginTop: 60}}>
              <TabPanel index={1}>
                Individual
              </TabPanel>
            </div>
          </Route>
          <Route path="/professional">
            <div style={{marginTop: 60}}>
              <TabPanel index={2}>
                Professional
              </TabPanel>
            </div>
          </Route>
          <Route path="/business">
            <div style={{marginTop: 60}}>
              <TabPanel index={3}>
                Business
              </TabPanel>
            </div>
          </Route>
          <Route path="/test">
            <div style={{marginTop: 60}}>
              <TabPanel index={4}>
                Level test
              </TabPanel>
            </div>
          </Route>
          <Route path="/contact">
            <div style={{marginTop: 60}}>
              <TabPanel index={5}>
                Contact Form
              </TabPanel>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  )
}
  
export default Main;