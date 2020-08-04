import React from 'react';
import Button from '@material-ui/core/Button';
import './LandingPage.css';

import { moveToSection } from '../../utils/appUtils.js';
import { ReactComponent as PLSLogo } from '../../utils/images/pls_logo.svg' 

function LandingPage() {
    return (
      <div className="landing-container">
        <div className="landing-box">
          <div className="landing-title">
            <PLSLogo className="pls_landing_logo"/>
            <Button variant="contained" color="primary" onClick={() => moveToSection('home_title')}>
              Explore
            </Button>
          </div>
        </div>
      </div>
    );
  }

  export default LandingPage;