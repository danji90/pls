import React from 'react';

import NavBar from '../NavBar/NavBar2';
import Home from '../Home/Home';
import Service from '../Service/Service';
import LandingPage from '../LandingPage/LandingPage';
import sectionData from '../../utils/service_data.js';
import './Main.css';

function Main() {
      return (
        <>
          <div className="background">
            <LandingPage />
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