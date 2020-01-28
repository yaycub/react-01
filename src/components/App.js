import React from 'react';
import styles from './App.css';
import Header from './Header';
import Footer from './Footer';
import Character from './Character';

import alanImg from '../assets/alanrails.jpeg';
import babyImg from '../assets/babylegs.jpeg';
import celebImg from '../assets/celebjerry.jpeg';
import centaurImg from '../assets/centaur.jpeg';
import garlovianImg from '../assets/garblovian.jpeg';
import generalstoreImg from '../assets/generalstoreowner.jpeg';
import insuranceImg from '../assets/insurancerick.jpeg';
import stacyImg from '../assets/stacy.jpeg';

const App = () => (
  < >
    <Header styles={styles}/>
    <section>
      <Character  name="Alan Rails" image={alanImg} status="Dead" species="Human, Superhuman (Ghost trains summoner)" gender="Male" origin="unkown" lastLoc="Worldender's lair"/>
    </section>
    <Footer styles={styles} />
  </>
);

export default App;
