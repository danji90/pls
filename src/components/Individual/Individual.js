import React from 'react';
import { makeStyles } from '@material-ui/core';
import PlsContainer from '../PlsContainer/PlsContainer'
import LandingPage from '../LandingPage/LandingPage';

import divider from '../../utils/images/pls_divider.png';
import desk from '../../utils/images/desk3.jpg';
import { ReactComponent as PLSLogo } from '../../utils/images/pls_logo.svg'

const useStyles = makeStyles((theme) => ({
  landingTitle: {
    width: '100%',
    height: 200,
    backgroundImage: `url(${desk})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat, repeat',
  },
  interImage: {
    position: 'absolute',
    top: -200,
    left: 0,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      top: -100,
    },
    [theme.breakpoints.down('xs')]: {
      top: -50,
    },
  },
}));

const Individual = () => {
  const classes = useStyles();
  return (
    <>
      <PlsContainer>
        <div id="home_title" className={classes.landingTitle}>
          <h1>Individual services</h1>
        </div>
      </PlsContainer>
      <PlsContainer flexDirection="column" backgroundColor="#f9f9f9">
        <img className={classes.interImage} src={divider} alt="divider" ></img>
        <div style={{height: 800}}></div>
      </PlsContainer>
      
    </>
  );
}

  export default Individual;