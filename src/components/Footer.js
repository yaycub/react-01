import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Footer extends Component {
  static propTypes = {
    styles: PropTypes.object
  }

  render() {
    const { styles } = this.props;

    return (
      <footer className={styles.Footer}>
        <section className={styles.stats}>
          <p>Characters: 493</p>
          <p>Locations: 76</p>
          <p>Episodes: 31</p>
        </section>
        <section className={styles.acknowledgment}>
          <p>❮❯ by <a href="#">Axel Fuhrmann</a> 2020</p>
        </section>
      </footer>
    );
  }
}
