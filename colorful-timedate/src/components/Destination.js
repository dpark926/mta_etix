import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/OriginDest.css'

let locations = ['GRAND CENTRAL TERMINAL', 'PENN STATION', '', 'A', 'Albertson', 'Amagansett', 'Amityville', 'Ansonia', 'Appalachian Trail',
  'Ardsley on Hudson', 'Atlantic Terminal', 'Auburndale', 'B', 'Babylon', 'Baldwin',
  'Bay Shore', 'Bayside', 'Beacon', 'Beacon-Falls', 'Beadford Hills',
  'Bellrose', 'Bellmore', 'Bellport', 'Bethel', 'Bethpage',
  'Botanical Garden', 'Branchville', 'Breakneck Ridge', 'Brentwood', 'Brewster',
  'Bridgehampton', 'Bridgeport', 'Broadway', 'Bronxville', 'C', 'Cannondale', 'Carle Place',
  'Cedarhurst', 'Central Islip', 'Centre Avenue', 'Chappaqua', 'Cold Spring',
  'Cold Spring Harbor', 'Copiague', 'Cortlandt', 'Cos Cob', 'Country Life Press',
  'Crestwood', 'Croton Falls', 'Corton-Harmon', 'D', 'Danbury', 'Darien', 'Deer Park',
  'Derby-Shelton', 'Dobbs Ferry', 'Douglaston', 'Dover Plains', 'E', 'East Hampton',
  'East New York', 'East Norwalk', 'East Rockaway', 'East Wiliston', 'F', 'Fairfield',
  'Fairfield Metro', 'Far Rockaway', 'Farmingdale', 'Fleetwood', 'Floral Park',
  'Flushing Main Street', 'Fordham', 'Forest Hills', 'Freeport', 'Garden City',
  'G', 'Garrison', 'Gibson', 'Glen Cove', 'Glen Head', 'Geln Street', 'Glenbrook',
  'Glenwood', 'Goldens Bridge', 'Great Neck', 'Great River']

function Destination (props) {
  let destination = props.destination
  let newArray = []

  for (var i = 0; i < locations.length; i++) {
    let location = locations[i]
    if (props.clickedOrigin === 'GRAND CENTRAL TERMINAL' && location === 'PENN STATION') {
      continue
    } else if (props.clickedOrigin === 'PENN STATION' && location === 'GRAND CENTRAL TERMINAL') {
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
    } else {
      return (
        <div className="location-list-blah" onClick={props.handleClickedDestination}>
          <Link to="/ticket-type">
            <div className="location-each" id={location}>{location}</div>
          </Link>
        </div>
      )
    }
  })

  return (
    <div>
      <div className="location-header nav justify-content-center">
        <Link to="/origin">
          <div className="location-header-arrow fa fa-arrow-left" style={{fontSize: "1.5em", position: "fixed", margin: "20px 10px"}}></div>
        </Link>
        <h2 className="location-header-text">Select Destination Station</h2>
      </div>
      <div className="animated slideInRight">
        <div className="origin-destination">
          <div className="origin-destination-third">{props.clickedOrigin}</div>
          <div className="origin-destination-middle fa fa-arrow-right" id="arrow-right" style={{fontSize: "1em", color: "white", fontWeight: "300"}}></div>
          <div className="origin-destination-third"></div>
        </div>
        <div className='search-wrapper'>
          <div className='search-wrapper2'>
            <div className="location-search-icon fa fa-search" style={{color: "white", fontSize: "1em"}}></div>
            <input className="location-search-box" type='text' onChange={props.handleOrigin} placeholder="Search"></input>
          </div>
        </div>
        {/* <input className="location-search" type='text' onChange={props.handleDestination} placeholder="Search"></input> */}
        <div className="location-list">
          {/* <div className="location-list-blah" onClick={props.handleClickedDestination}>
            <Link to="/ticket-type">
              <div className="location-each" id='Grand Central Station'>Grand Central Station</div>
            </Link>
          </div>
          <div className="location-list-blah" onClick={props.handleClickedDestination}>
            <Link to="/ticket-type">
              <div className="location-each" id='Penn Station'>Penn Station</div>
            </Link>
          </div> */}
          {loc}
        </div>
      </div>
    </div>
  )
}

export default Destination
