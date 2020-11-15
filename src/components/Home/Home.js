import React from 'react';
import { makeStyles } from '@material-ui/core';
import PlsContainer from '../PlsContainer/PlsContainer';

import portrait from '../../utils/images/pete.png';
import divider from '../../utils/images/pls_divider_top_odd.png';
import { ReactComponent as PLSLogo } from '../../utils/images/pls_logo.svg';

const useStyles = makeStyles(theme => ({
  landingTitle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    width: '100%',
    margin: 50,
    '& h1': {
      fontSize: 80,
      maxWidth: 800,
      [theme.breakpoints.down('sm')]: {
        fontSize: 50,
      },
    },
    '& h2': {
      fontSize: '4vh',
    },
  },
  mainTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  mainImageContainer: {
    height: 250,
    width: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '5px solid #353535',
    borderRadius: '50%',
    backgroundColor: 'rgb(249, 249, 249)',
  },
  mainImage: {
    height: '42%',
  },
  interImage: {
    width: '100%',
  },
  bioContainer: {
    width: '100%',
    backgroundColor: '#f9f9f9',
  },
  bioBox: {
    padding: '50px 50px 50px',
  },
  bioFlex: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  bioTextContainer: {
    padding: '20px 0',
    flex: 1,
    minWidth: 260,
    marginRight: 30,
  },
  bioImageContainer: {
    height: 220,
    width: 220,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '5px solid #353535',
    borderRadius: '50%',
    marginRight: 30,
    marginBottom: 50,
    overflow: 'hidden',
  },
  bioCredentials: {
    flex: 1,
    minWidth: 260,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <PlsContainer>
        <div id="home_title" className={classes.landingTitle}>
          <div className={classes.mainTitle}>
            <div className={classes.mainImageContainer}>
              <PLSLogo className={classes.mainImage} />
            </div>
            <h1>Pete's Language Services</h1>
          </div>
          <h2>
            "Help yourself to the biscuits", 'Which bay does the Bournemouth bus
            leave from?", "What size are you?" Most people nowadays can
            understand many things in English but how good is your command of
            English when it comes to speaking? We constantly need to practise
            and improve our English, whether it's for travel, to communicate
            with your son's girlfriend, or to get language certification for
            studies or for a job. Pete's Language Services is here to help you!
          </h2>
        </div>
      </PlsContainer>
      <PlsContainer flexDirection="column">
        <img className={classes.interImage} src={divider} alt="divider" />
        <div id="home" className={classes.bioContainer}>
          <div className={classes.bioBox}>
            <h1>But who's Pete?</h1>
            <div className={classes.bioFlex}>
              <div className={classes.bioImageContainer}>
                <img src={portrait} alt="source not found" />
              </div>
              <div className={classes.bioTextContainer}>
                <span>
                  Hi there! I'm Pete Marsh-Hunn and I’m originally from
                  Bournemouth, UK. After some years of working as an English
                  teacher in Germany, Morocco and Saudi Arabia, I moved to
                  Bolzano/Bozen in the Dolomites region of Northern Italy where
                  I’ve been living for over 30 years. With my extensive
                  English-teaching experience and my very people-centred,
                  friendly approach I think I can help you in many different
                  ways to improve your English. Click on whichever of the above
                  pages that interest you most.
                </span>
              </div>
              <div className={classes.bioCredentials}>
                <p>My credentials:</p>
                <ul>
                  <li>English native-speaker from the UK.</li>
                  <li>University-trained language teacher.</li>
                  <li>
                    Over 35 years‘ English teaching experience of all
                    levels/age-groups.
                  </li>
                  <li>
                    Extensive experience of teaching English in companies,
                    public administration, banks, etc.
                  </li>
                  <li>
                    Extensive experience of teacher training at Uni
                    Bolzano/Bozen, at alpha beta piccadilly, etc.
                  </li>
                  <li>Official examiner for Cambridge and UniBz exams.</li>
                  <li>
                    Organiser of English hiking weeks all over Italy and abroad.
                  </li>
                  <li>Extensive translating and proof-reading experience.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </PlsContainer>
    </>
  );
};

export default Home;
