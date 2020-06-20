import React from 'react';
import './Home.css';

import portrait from '../../utils/images/pete.png'

function Home() {
    return (
      <div id="home" className="home-container">
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
      </div>
    );
  }

  export default Home;