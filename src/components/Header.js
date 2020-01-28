import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  static propTypes = {
    styles: PropTypes.object
  }
  
  render(){
    const { styles } = this.props;
    return (
      <header className={styles.Header}>
        <nav>
          <ul>
            <li><a className={styles.active} href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Documentation</a></li>
          </ul>
        </nav>
        <section>
          <h1>The Rick And Morty Api</h1>
          <h2>Hey, did you ever want to hold a Terry fold?</h2>
        </section>
      </header>
    );
  }
}
