import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import handleClick from '../actions/clickActions';
import handleType from '../actions/typeActions';
import Header from './Header';
import BlackBar from './BlackBar';
import SearchBar from './SearchBar';
import locations from '../data/locations';
import '../../styles/OriginDest.css';

class Destination extends Component {
  handleClickedDestination = (event) => {
    this.props.handleClickedDestination( event.target.id );
  }

  handleDestination = (event) => {
    this.props.handleDestination( event.target.value );
  }

  render() {
    let destination = this.props.typeReducer.destination
    let newArray = []

    for (var i = 0; i < locations.length; i++) {
      let location = locations[i]
      if (this.props.clickReducer.clickedOrigin === 'Grand Central Terminal' && location === 'Penn Station') {
        continue
      } else if (this.props.clickReducer.clickedOrigin === 'Penn Station' && location === 'Grand Central Terminal') {
        continue
      } else if (this.props.clickReducer.clickedOrigin === location) {
        continue
      } else if(location.slice(0, destination.length).toLowerCase() === destination.toLowerCase() && !newArray.includes(location)) {
        newArray.push(location)
      }
    }

    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let loc = newArray.map( location => {
      if (alpha.includes(location)) {
        return (
          <div className='alpha'>
            <div className='letter'>{location}</div>
          </div>
        )
      } else if (location === '.') {
        return
      } else if (location === 'Grand Central Terminal' || location === 'Penn Station') {
        return (
          <div className="location-list-blah" onClick={this.handleClickedDestination}>
            <Link to="/ticket-type">
              <div className="location-each" id={location}>{location.toUpperCase()}<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
            </Link>
          </div>
        )
      } else {
        return (
          <div className="location-list-blah" onClick={this.handleClickedDestination}>
            <Link to="/ticket-type">
              <div className="location-each" id={location}>{location}<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
            </Link>
          </div>
        )
      }
    })

    return (
      <div className='test'>
        <div className="header-container">
          <Header
            headerTitle='Select Destination Station'
            previousLink='/origin'
          />
          <BlackBar
            yellowWidth='20%'
          />
          <div className="origin-destination">
            <div className="origin-destination-third">{this.props.clickReducer.clickedOrigin}</div>
            <div className="origin-destination-middle fa fa-arrow-right" id="arrow-right" style={{fontSize: "1em", color: "white", fontWeight: "300"}}></div>
            <div className="origin-destination-third"></div>
          </div>
          <SearchBar
            handleLocation={this.handleDestination}
          />
        </div>
        <div className="location-list-wrapper-destination animated slideInRight">
          <div className="location-list">
            {loc}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {
  handleClickedDestination: handleClick.handleClickedDestination,
  handleDestination: handleType.handleTypedDestination
}

export default connect( mapStateToProps, mapActionsToProps )( Destination );
