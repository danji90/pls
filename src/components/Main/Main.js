import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import TabPanel from '../TabPanel/TabPanel';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Individual from '../Individual/Individual';
import Professional from '../Professional/Professional';
import Business from '../Business/Business';
import LevelTest from '../LevelTest/LevelTest';
import conversation from '../../utils/images/study_group2.jpg';
import workshop from '../../utils/images/workshop2.jpg';
import business from '../../utils/images/business.jpg';

const Main = () => {
  return (
    <>
      <Router basename="/">
        {/* Router */}
        <div style={{ position: 'relative' }}>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/home">
              <TabPanel index={0}>
                <Home />
              </TabPanel>
              <Footer />
            </Route>
            <Route path="/individual">
              <TabPanel index={1} backgroundImage={conversation}>
                <Individual />
              </TabPanel>
              <Footer />
            </Route>
            <Route path="/professional">
              <TabPanel index={2} backgroundImage={workshop}>
                <Professional />
                <Footer />
              </TabPanel>
            </Route>
            <Route path="/business">
              <TabPanel index={3} backgroundImage={business}>
                <Business />
                <Footer />
              </TabPanel>
            </Route>
            <Route path="/test">
              <TabPanel index={4} backgroundColor="white">
                <LevelTest />
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
  );
};

export default Main;
