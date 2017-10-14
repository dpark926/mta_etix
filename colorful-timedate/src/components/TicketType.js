import React from 'react';
import { Link } from 'react-router-dom'

function TicketType () {

  return (
    <div>
      <div className="location-header nav justify-content-center">
        <h2 className="location-header-text">Select Ticket Type</h2>
      </div>
      <div className="animated slideInRight">
        <Link to='/ten-trip'>
          <div className="button">Ten Trip</div>
        </Link>
        <Link to='/one-way'>
          <div className="button">One Way</div>
        </Link>
        <Link to='/round-trip'>
          <div className="button">Round Trip</div>
        </Link>
        <Link to='/weekly'>
          <div className="button">Weekly</div>
        </Link>
      </div>
    </div>
  )
}

export default TicketType;
