import React from 'react';
import { Link } from 'react-router-dom'

function OneWay () {

  return (
    <div>
      <div className="location-header nav justify-content-center">
        <h2 className="location-header-text">Select Ticket Type</h2>
      </div>
      <div className="animated slideInRight">
        <Link to='/accept'>
          <div className="button">Peak</div>
        </Link>
        <Link to='/accept'>
          <div className="button">Off Peak</div>
        </Link>
        <Link to='/accept'>
          <div className="button">Senior</div>
        </Link>
        <Link to='/accept'>
          <div className="button">Family</div>
        </Link>
        <Link to='/accept'>
          <div className="button">Military</div>
        </Link>
        <Link to='/accept'>
          <div className="button">Disabled / Medicare</div>
        </Link>
        <Link to='/accept'>
          <div className="button">Child Peak</div>
        </Link>
        <Link to='/accept'>
          <div className="button">Child Off Peak</div>
        </Link>
      </div>
    </div>
  )
}

export default OneWay;
