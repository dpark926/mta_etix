import React from 'react';
import { Link } from 'react-router-dom'

function TicketType (props) {

  return (
    <div>
      <div className="location-header nav justify-content-center">
        <h2 className="location-header-text">Select Ticket Type</h2>
      </div>
      <div className="animated slideInRight">
        <div className="origin-destination">
          <div className="origin-destination-third">{props.clickedOrigin}</div>
          <div className="origin-destination-middle fa fa-long-arrow-right" id="arrow-right"></div>
          <div className="origin-destination-third">{props.clickedDestination}</div>
        </div>
        <Link to='/ten-trip'>
          <div className="button" onClick={props.handleTicketType} id="Ten Trip">Ten Trip</div>
        </Link>
        <Link to='/monthly'>
          <div className="button" onClick={props.handleTicketType} id="Monthly">Monthly</div>
        </Link>
        <Link to='/one-way'>
          <div className="button" onClick={props.handleTicketType} id="One Way">One Way</div>
        </Link>
        <Link to='/round-trip'>
          <div className="button" onClick={props.handleTicketType} id="Round Trip">Round Trip</div>
        </Link>
        <Link to='/weekly'>
          <div className="button" onClick={props.handleTicketType} id="Weekly">Weekly</div>
        </Link>
      </div>
    </div>
  )
}

export default TicketType;
