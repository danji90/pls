import React from 'react';

import NavBar from '../NavBar/NavBar';
import Section from '../Section/Section';
import sectionData from '../../utils/section_data.js';
import './Main.css';

function Main() {
      return (
        <>
          <div className="background">
            <div className="landing-container">
              <div className="landing-box">
                <div className="landing-title">
                  <span className="pls-main-title">Pete's Language Services</span>
                </div>
              </div>
            </div>
            <NavBar />
            <div className="main-content">
              {
                sectionData.map(section => {
                  return <Section data={section}/>
                })
              }
            </div>
          </div>
        </>
      )
  }
  
  
  
  export default Main;