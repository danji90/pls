import React from 'react';
import Button from '@material-ui/core/Button';

import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Service from '../Service/Service';
import sectionData from '../../utils/service_data.js';
import { moveToSection } from '../../utils/appUtils.js';
import { ReactComponent as PLSLogo } from '../../utils/images/pls_logo.svg' 
import './Main.css';

function Main() {
      return (
        <>
          <div className="background">
            <div className="landing-container">
              <div className="landing-box">
                <div className="landing-title">
                  <PLSLogo className="pls_landing_logo"/>
                  <Button variant="contained" color="primary" onClick={() => moveToSection('main_content')}>
                    Explore
                  </Button>
                </div>
              </div>
            </div>
            <NavBar />
            <div id="main_content" className="main-content">
              <Home />
              <div id="services" className="services">
                {
                  sectionData.map(section => {
                    return <Service data={section}/>
                  })
                }
              </div>
            </div>
          </div>
        </>
      )
  }
  
  
  
  export default Main;