import React, { Component } from 'react';
import styles from './Character.css';
import PropTypes from 'prop-types';

export default class Character extends Component{
  static propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    lastLoc: PropTypes.string.isRequired
  }

  render(){
    const { image, name, status, species, gender, origin, lastLoc } = this.props;
    return (
      <article className={styles.characterCard}>
        <div className={styles.cardHeader}>
          <img src={image} className={styles.charImg}></img>
          <h2 className={styles.charName}>{name}</h2>
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.stats}>
            <span className={styles.span}>Status</span>
            <p className={styles.pStat}>{status}</p>
          </div>
          <div className={styles.stats}>
            <span className={styles.span}>Species</span>
            <p className={styles.pStat}>{species}</p>
          </div>
          <div className={styles.stats}>
            <span className={styles.span}>Gender</span>
            <p className={styles.pStat}>{gender}</p>
          </div>
          <div className={styles.stats}>
            <span className={styles.span}>Origin</span>
            <p className={styles.pStat}>{origin}</p>
          </div>
          <div className={styles.stats}>
            <span className={styles.span}>Last Location</span>
            <p className={styles.pStat}>{lastLoc}</p>
          </div>
        </div>
      </article>
    );
  }
}
