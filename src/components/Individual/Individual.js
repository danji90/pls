import React from 'react';
import { makeStyles } from '@material-ui/core';
import PlsContainer from '../PlsContainer/PlsContainer'
import Service from '../Service/Service';

import divider from '../../utils/images/pls_divider.png';
import desk from '../../utils/images/desk3.jpg';
import conversation_1 from '../../utils/images/study_group2.jpg';
import { ReactComponent as PLSLogo } from '../../utils/images/pls_logo.svg';

import serviceData from '../../utils/service_data.js'; 

const individualServices = serviceData.filter((service) => service.category === 'individual')

const useStyles = makeStyles((theme) => ({
  image: {
    position: 'absolute',
    width: '100%',
    backgroundImage: `url(${conversation_1})`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat, repeat',
  },
  landingTitle: {
    width: '100%',
    // backgroundImage: `url(${desk})`,
    // backgroundPosition: 'center', 
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat, repeat',
    '& h1': {
      padding: '40px 20px',
    },
  },
  interImage: {
    width: '100%',
  },
  servicesContainer: {
    width: '100%',
  }
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
      <PlsContainer flexDirection="column">
        <img className={classes.interImage} src={divider} alt="divider" ></img>
        <div className={classes.servicesContainer}>
          {individualServices.map((service) => <Service key={service.id} data={service}/>)}
        </div>
      </PlsContainer>
    </>
  );
}

  export default Individual;