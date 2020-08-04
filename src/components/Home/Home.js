import React from 'react';
import { makeStyles } from '@material-ui/core';
import PlsContainer from '../PlsContainer/PlsContainer'
import './Home.css';

import portrait from '../../utils/images/pete.png';
import study from '../../utils/images/study_group.jpg';
import chatting from '../../utils/images/chatting.svg';


const useStyles = makeStyles((theme) => ({
  landingTitle: {
    width: '100%',
    margin: 50,
    '& h1': {
      fontSize: '10vw',
    }
  },
  mainTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  mainImage: {
    maxHeight: 200,
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <PlsContainer bottomSlice={true}>
        <div className={classes.landingTitle}>
          <div className={classes.mainTitle}>
            <img className={classes.mainImage} src={chatting} alt="chatting" ></img>
            <h1>Pete's Language Services</h1>
          </div>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h2>
        </div>
      </PlsContainer>
      {/* <div id="home" className="home-container">
        <div className="home-format">
          <div className="home-introduction">
            <div className="home-portrait-container">
              <img className="home-portrait" src={portrait} alt='source not found'></img>
            </div>
            <div className="home-text">
              <span>
                My name’s Pete Marsh-Hunn and I’m originally from Bournemouth, UK. After some years of working as an English teacher in Germany, Morocco and Saudi Arabia, I moved to Bolzano/Bozen in the Dolomites region of Northern Italy where I’ve been living for over 30 years. With my extensive English-teaching experience and my very people-centred, friendly approach I think I can help you in many different ways to improve your English. Click on whichever of the above pages that interest you most.
              </span>
              <div className="home-list">
                <p>My credentials:</p>
                <ul>
                  <li>English native-speaker from the UK.</li>
                  <li>University-trained language teacher.</li>
                  <li>Over 35 years‘ English teaching experience of all levels/age-groups.</li>
                  <li>Extensive experience of teaching English in companies, public administration, banks, etc.</li>
                  <li>Extensive experience of teacher training at Uni Bolzano/Bozen, at alpha beta piccadilly, etc.</li>
                  <li>Official examiner for Cambridge and UniBz exams.</li>
                  <li>Organiser of English hiking weeks all over Italy and abroad.</li>
                  <li>Extensive translating and proof-reading experience.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

  export default Home;