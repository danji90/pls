import React, { useEffect, useState } from 'react';
import { Prompt } from 'react-router-dom';
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
  const [isBlocking, setIsBlocking] = useState(false);
  const [hoverIframe, setHoverIframe] = useState(false);

  useEffect(() => {
    const moveIn = () => setHoverIframe(true);
    const moveOut = () => setHoverIframe(false);
    const iFrame = document.getElementById('pls-google-form');
    if (iFrame) {
      iFrame.addEventListener('mouseover', moveIn);
      iFrame.addEventListener('mouseout', moveOut);
    }
    return () => {
      iFrame.removeEventListener('mouseover', moveIn);
      iFrame.removeEventListener('mouseout', moveOut);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('blur', () => {
      if (hoverIframe && !isBlocking) {
        setIsBlocking(true);
      }
    });
  }, [hoverIframe, isBlocking]);

  return (
    <>
      <Prompt
        when={isBlocking}
        message={() =>
          'Warning: Any progress in your exam document will be lost. Are you sure you want to leave the page?'
        }
      />
      <PlsContainer>
        <div className={classes.landingTitle}>
          <h1>PLS - Level test</h1>
        </div>
      </PlsContainer>
      <PlsContainer flexDirection="column" styles={{ alignItems: 'center' }}>
        <Divider idx={2} />
        <div className={classes.formContainer}>
          <iframe
            className={classes.iframe}
            id="pls-google-form"
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
