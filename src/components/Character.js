import React, { Component } from 'react';
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
      <article className="character-card">
        <div className="card-header">
          <img src={image} className="char-img"></img>
          <h2 className="char=name">{name}</h2>
        </div>
        <div className="card-info">
          <div className="stats">
            <span>Status</span>
            <p>{status}</p>
          </div>
          <div className="stats">
            <span>Species</span>
            <p>{species}</p>
          </div>
          <div className="stats">
            <span>Gender</span>
            <p>{gender}</p>
          </div>
          <div className="stats">
            <span>Origin</span>
            <p>{origin}</p>
          </div>
          <div className="stats">
            <span>Last Location</span>
            <p>{lastLoc}</p>
          </div>
        </div>
      </article>
    );
  }
}
