import React from 'react';

import NavBar from '../NavBar/NavBar';
import './Main.css';

function Main() {
      return (
        <>
          <div className="background">
            <div className="main-content">
              <div className="landing-container">
                <div className="landing-title">
                  <span className="pls-main-title">Pete's Language Services</span>
                </div>
              </div>
              <NavBar />
              <div className="panels-container">
              </div>
            </div>
          </div>
        </>
      )
  }
  
  
  
  export default Main;