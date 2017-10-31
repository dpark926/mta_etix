import React from 'react';
import { Link } from 'react-router-dom'

function CardInfo (props) {

  return (
    <div>
      <div className="location-header nav justify-content-center">
        <h2 className="location-header-text">Card Info</h2>
      </div>
      <div className="animated slideInRight">
        <div className="origin-destination">
          <div className="origin-destination-third">{props.clickedOrigin.toUpperCase()}</div>
          <div className="origin-destination-middle fa fa-long-arrow-right" id="arrow-right"></div>
          <div className="origin-destination-third">{props.clickedDestination.toUpperCase()}</div>
          <div className="origin-destination-third">{props.ticketType.toUpperCase()}</div>
          <div className="origin-destination-third">{props.ticket.toUpperCase()}</div>
        </div>
        <p>This is the Card Info Page</p>
        <div>Security Code</div>
        <input type='text' onChange={props.handleSecurityCode}></input>
        <div>Please enter a security code at least 3 digits long</div>
        <div>Enter the email address below that you would like your receipt sent to.</div>
        <div>Your E-mail</div>
        <input type='text' onChange={props.handleSecurityCode} placeholder='dpeace926@yahoo.com'></input>
        <div>This ticket purchase is subject to accepting the terms and conditions</div>
        <Link to='/access'><div>Accept & Pay </div></Link>
      </div>
    </div>
  )
}

export default CardInfo;
