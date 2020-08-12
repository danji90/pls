import React from 'react';
import { makeStyles } from '@material-ui/core';
import PlsContainer from '../PlsContainer/PlsContainer'
import Service from '../Service/Service';

import desk from '../../utils/images/desk3.jpg';
import conversation_1 from '../../utils/images/study_group2.jpg';
import { ReactComponent as PLSLogo } from '../../utils/images/pls_logo.svg';

import serviceData from '../../utils/service_data.js'; 

const individualServices = serviceData.filter((service) => service.category === 'individual')

const useStyles = makeStyles((theme) => ({
  landingTitle: {
    width: '100%',
    '& h1': {
      padding: '40px 20px',
    },
  },
  divider: {
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
        <div className={classes.servicesContainer}>
          {individualServices.map((service) => <Service key={service.id} data={service}/>)}
        </div>
      </PlsContainer>
    </>
  );
}

  export default Individual;