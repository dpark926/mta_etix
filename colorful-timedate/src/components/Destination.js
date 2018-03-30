import React from 'react'
import { Link } from 'react-router-dom'
import locations from '../locations'
import '../styles/OriginDest.css'

function Destination (props) {
  let destination = props.destination
  let newArray = []

  for (var i = 0; i < locations.length; i++) {
    let location = locations[i]
    if (props.clickedOrigin === 'Grand Central Terminal' && location === 'Penn Station') {
      continue
    } else if (props.clickedOrigin === 'Penn Station' && location === 'Grand Central Terminal') {
      continue
    } else if (props.clickedOrigin === location) {
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
        <div className="location-list-blah" onClick={props.handleClickedDestination}>
          <Link to="/ticket-type">
            <div className="location-each" id={location}>{location.toUpperCase()}<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
          </Link>
        </div>
      )
    } else {
      return (
        <div className="location-list-blah" onClick={props.handleClickedDestination}>
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

        <div className="location-header nav justify-content-center">
          <Link to="/origin">
            <div className="location-header-arrow fa fa-arrow-left" style={{fontSize: "1.5em"}}></div>
          </Link>
          <h2 className="location-header-text">Select Destination Station</h2>
        </div>

        <div className="black-bar">
          <div className="yellow-progress" style={{width: "20%"}}></div>
        </div>

        <div className="origin-destination">
          <div className="origin-destination-third">{props.clickedOrigin}</div>
          <div className="origin-destination-middle fa fa-arrow-right" id="arrow-right" style={{fontSize: "1em", color: "white", fontWeight: "300"}}></div>
          <div className="origin-destination-third"></div>
        </div>

        <div className='search-wrapper'>
          <div className='search-wrapper2'>
            <div className="location-search-icon fa fa-search" style={{color: "white", fontSize: "1em"}}></div>
            <input className="location-search-box" type='text' onChange={props.handleDestination} placeholder="Search"></input>
          </div>
        </div>

      </div>

      <div className="location-list-wrapper-destination animated slideInRight">
        <div className="location-list">
          {loc}
        </div>
      </div>

    </div>
  )
}

export default Destination
