import React from 'react';
import { Link } from 'react-router-dom'

function PaymentMethod (props) {

  return (
    <div>
      <div className="location-header nav justify-content-center">
        <h2 className="location-header-text">Select Payment Method</h2>
      </div>
      <div className="animated slideInRight">
        <div className="origin-destination">
          <div className="origin-destination-third">{props.clickedOrigin.toUpperCase()}</div>
          <div className="origin-destination-middle fa fa-long-arrow-right" id="arrow-right"></div>
          <div className="origin-destination-third">{props.clickedDestination.toUpperCase()}</div>
          <div className="origin-destination-third">{props.ticketType.toUpperCase()}</div>
          <div className="origin-destination-third">{props.ticket.toUpperCase()}</div>
        </div>
        <div>Total: {props.cost}</div>
        <div>Payment methods</div>
        <Link to='/card-info'>
          <div className="button">American Express</div>
        </Link>
        {/* <Link to='/origin'> */}
          <div className="button">Pay with New Card</div>
        {/* </Link> */}
        {/* <Link to='/origin'> */}
          <div className="button">Pay with PasterPass</div>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default PaymentMethod;
