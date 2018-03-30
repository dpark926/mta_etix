import React from 'react'
import { Link } from 'react-router-dom'
import locations from '../locations'
import '../styles/OriginDest.css'

function Origin (props) {
  let origin = props.origin
  let newArray = []

  for (var i = 0; i < locations.length; i++) {
    let location = locations[i]
      if (location.slice(0, origin.length).toLowerCase() === origin.toLowerCase() && !newArray.includes(location)) {
        newArray.push(location)
      }
  }

  // let loc = newArray.map( location =>
  //   <div className="location-list-blah" onClick={props.handleClickedOrigin}>
  //     <Link to='/destination'>
  //       <div className="location-each" id={location}>{location}</div>
  //     </Link>
  //   </div>
  // )

  let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

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
        <div className="location-list-blah" onClick={props.handleClickedOrigin}>
          <Link to="/destination">
            <div className="location-each" id={location}>{location.toUpperCase()}<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
          </Link>
        </div>
      )
    } else if (location === 'Penn Station') {
      return (
        <div className="location-list-blah" onClick={props.handleClickedOrigin}>
          <Link to="/destination">
            <div className="location-each penn-station" id={location}>{location.toUpperCase()}<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
          </Link>
        </div>
      )
    } else {
      return (
        <div className="location-list-blah" onClick={props.handleClickedOrigin}>
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
        <div className="location-header nav justify-content-center">
          <Link to="/buytickets">
            <div className="location-header-arrow fa fa-arrow-left" style={{fontSize: "1.5em"}}></div>
          </Link>
          <h2 className="location-header-text">Select Origin Station</h2>
        </div>
        <div className="black-bar">
          <div className="yellow-progress" style={{width: "10%"}}></div>
        </div>
        <div className='search-wrapper'>
          <div className='search-wrapper2'>
            <div className="location-search-icon fa fa-search" style={{color: "white", fontSize: "1em"}}></div>
            <input className="location-search-box" type='text' onChange={props.handleOrigin} placeholder="Search"></input>
          </div>
        </div>
      </div>
      <div className="location-list-wrapper animated slideInRight">
        <div className="location-list">
          {loc}
        </div>
      </div>
    </div>
  )
}

export default Origin
