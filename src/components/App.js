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
    <Header />
    <section className={styles.showcase}>
      <Character  name="Alan Rails" image={alanImg} status="Dead" species="Human, Superhuman (Ghost trains summoner)" gender="Male" origin="unkown" lastLoc="Worldender's lair"/>

      <Character name="Baby Legs" image={babyImg} status="Alive" species="Human, Human with baby legs" gender="Male" origin="unknown" lastLoc="Interdimensional Cable" />

      <Character name="Centaur" image={centaurImg} status="Alive" species="Humanoid, Centaur" gender="Male" origin="unknown" lastLoc="Mr. Goldenfold's dream" />

      <Character name="Garblovian" image={garlovianImg} status="Alive" species="Alien, Garblovianr" gender="Male" origin="Glaagablaaga" lastLoc="unknown" />

      <Character name="General Store Owner" image={generalstoreImg} status="Dead" species="Alien, Cat-Person" gender="Male" origin="Purge Planet" lastLoc="Purge Planet" />

      <Character name="Insurance Rick" image={insuranceImg} status="unknown" species="Human" gender="Male" origin="unknown" lastLoc="Citadel of Ricks" />

      <Character name="Celebrity Jerry" image={celebImg} status="Alive" species="Human" gender="Male" origin="Earth (C-500A)" lastLoc="Earth (C-500A)" />

      <Character name="Stacy" image={stacyImg} status="Alive" species="Human" gender="Female" origin="Earth (Replacement Dimension)" lastLoc="Earth (Replacement Dimension)" />
    </section>
    <Footer styles={styles} />
  </>
);

export default App;
