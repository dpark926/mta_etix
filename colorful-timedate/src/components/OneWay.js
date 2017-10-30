import React from 'react';
import { Link } from 'react-router-dom'

function OneWay (props) {

  return (
    <div>
      <div className="location-header nav justify-content-center">
        <h2 className="location-header-text">Select Ticket</h2>
      </div>
      <div className="animated slideInRight">
        <div className="origin-destination">
          <div className="origin-destination-third">{props.clickedOrigin.toUpperCase()}</div>
          <div className="origin-destination-middle fa fa-long-arrow-right" id="arrow-right"></div>
          <div className="origin-destination-third">{props.clickedDestination.toUpperCase()}</div>
          <div className="origin-destination-third">{props.ticketType.toUpperCase()}</div>
        </div>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Peak">Peak</div>
        </Link>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Off Peak">Off Peak</div>
        </Link>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Senior">Senior</div>
        </Link>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Family">Family</div>
        </Link>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Military">Military</div>
        </Link>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Disable">Disabled / Medicare</div>
        </Link>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Child Peak">Child Peak</div>
        </Link>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Child Off">Child Off Peak</div>
        </Link>
      </div>
    </div>
  )
}

export default OneWay;
