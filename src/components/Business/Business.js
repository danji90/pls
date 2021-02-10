import React from 'react';
import { makeStyles } from '@material-ui/core';
import PlsContainer from '../PlsContainer/PlsContainer';
import Service from '../Service/Service';
import LevelTestBtn from '../LevelTestBtn/LevelTestBtn';

import serviceData from '../../utils/service_data';

const individualServices = serviceData.filter(
  service => service.category === 'business',
);

const useStyles = makeStyles(() => ({
  landingTitle: {
    fontSize: 25,
    width: '100%',
    '& h1': {
      padding: '40px 40px',
    },
  },
  divider: {
    width: '100%',
  },
  servicesContainer: {
    width: '100%',
  },
}));

const Business = () => {
  const classes = useStyles();
  return (
    <>
      <PlsContainer>
        <div className={classes.landingTitle}>
          <h1>Business services</h1>
        </div>
      </PlsContainer>
      <LevelTestBtn />
      <PlsContainer flexDirection="column">
        <div className={classes.servicesContainer}>
          {individualServices.map((service, idx) => (
            <Service key={service.id} data={service} idx={idx} />
          ))}
        </div>
      </PlsContainer>
    </>
  );
};

export default Business;
