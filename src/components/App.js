import React from 'react';
import styles from './App.css';
import Header from './Header';
import Footer from './Footer';

const App = () => (
  <React.Fragment>
    <Header styles={styles}/>
    <Footer styles={styles} />
  </React.Fragment>
);

export default App;
