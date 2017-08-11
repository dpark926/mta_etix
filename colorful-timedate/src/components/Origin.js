import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/OriginDest.css'

let locations = ['Albertson', 'Amagansett', 'Amityville', 'Ansonia', 'Appalachian Trail',
  'Ardsley on Hudson', 'Atlantic Terminal', 'Auburndale', 'Babylon', 'Baldwin',
  'Bay Shore', 'Bayside', 'Beacon', 'Beacon-Falls', 'Beadford Hills',
  'Bellrose', 'Bellmore', 'Bellport', 'Bethel', 'Bethpage',
  'Botanical Garden', 'Branchville', 'Breakneck Ridge', 'Brentwood', 'Brewster',
  'Bridgehampton', 'Bridgeport', 'Broadway', 'Bronxville', 'Cannondale']

function Origin (props) {
  let origin = props.origin
  let newArray = []

  for (var i = 0; i < locations.length; i++) {
    let location = locations[i]
      if (location.slice(0, origin.length).toLowerCase() === origin.toLowerCase() && !newArray.includes(location)) {
        newArray.push(location)
      }
  }

  let loc = newArray.map( location =>
    <div className="location-list-blah">
      <Link to='/destination'>
        <div className="location-each">{location}</div>
      </Link>
    </div>
  )

  return (
    <div>
      <div className="location-header">
        <h2 className="location-header-text">Select Origin Station</h2>
      </div>
      <div className="animated slideInRight">
        <input className="location-search" type='text' onChange={props.handleOrigin} placeholder="Search for Origins"></input>
        <div className="location-list">
          {loc}
        </div>
      </div>
    </div>
  )
}

export default Origin
