import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlsContainer from '../PlsContainer/PlsContainer';
import Divider from '../Divider/Divider';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      width: '100%',
      minHeight: 100,
    },
  },
  iframe: {
    margin: 10,
    backgroundColor: 'white',
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  landingTitle: {
    fontSize: 25,
    width: '100%',
    '& h1': {
      padding: '40px 40px',
    },
  },
  formContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    marginTop: 50,
  },
});

const LevelTest = () => {
  const classes = useStyles();
  return (
    <>
      <PlsContainer>
        <div className={classes.landingTitle}>
          <h1>PLS - Level test</h1>
        </div>
      </PlsContainer>
      <PlsContainer flexDirection="column" styles={{ alignItems: 'center' }}>
        <Divider idx={2} />
        {/* <Paper>hello</Paper> */}
        <div className={classes.formContainer}>
          <iframe
            className={classes.iframe}
            title="pls-google-form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfa7XH3bafMVuNxRcI2wyu1CnndZvz9MUdSw-sJtBbepVIn6Q/viewform?embedded=true"
            width="700"
            height="800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
        <Divider position="bottom" />
      </PlsContainer>
    </>
  );
};

export default LevelTest;
