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

class Origin extends Component {
  handleClickedOrigin = (event) => {
    this.props.handleClickedOrigin( event.target.id );
  }

  handleOrigin = (event) => {
    this.props.handleOrigin( event.target.value );
  }

  render() {
    let origin = this.props.typeReducer.origin
    let newArray = []

    for (var i = 0; i < locations.length; i++) {
      let location = locations[i]
        if (location.slice(0, origin.length).toLowerCase() === origin.toLowerCase() && !newArray.includes(location)) {
          newArray.push(location)
        }
    }

    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let loc = newArray.map( location => {
      if (alpha.includes(location)) {
        return (
          <div className='alpha'>
            <div className='letter'>{location}</div>
          </div>
        )
      } else if (location === '.') {
        return (
          <div className='blank'>
            {/* <div className='letter'></div> */}
          </div>
        )
      } else if (location === 'Grand Central Terminal') {
        return (
          <div className="location-list-blah" onClick={this.handleClickedOrigin}>
            <Link to="/destination">
              <div className="location-each" id={location}>{location.toUpperCase()}<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
            </Link>
          </div>
        )
      } else if (location === 'Penn Station') {
        return (
          <div className="location-list-blah" onClick={this.handleClickedOrigin}>
            <Link to="/destination">
              <div className="location-each penn-station" id={location}>{location.toUpperCase()}<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
            </Link>
          </div>
        )
      } else {
        return (
          <div className="location-list-blah" onClick={this.handleClickedOrigin}>
            <Link to="/destination">
              <div className={`location-each ${location.split(" ").join("-").toLowerCase()}`} id={location}>{location}<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
            </Link>
          </div>
        )
      }
    })

    return (
      <div className='test'>
        <div className="header-container">
          <Header
            headerTitle='Select Origin Station'
            previousLink='/buytickets'
          />
          <BlackBar
            yellowWidth='10%'
          />
          <SearchBar
            handleLocation={this.handleOrigin}
          />
        </div>
        <div className="location-list-wrapper animated slideInRight">
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
  handleClickedOrigin: handleClick.handleClickedOrigin,
  handleOrigin: handleType.handleTypedOrigin
}

export default connect( mapStateToProps, mapActionsToProps )( Origin );
