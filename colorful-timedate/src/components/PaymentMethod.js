import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/PaymentMethod.css'

function PaymentMethod (props) {

  return (
    <div>
      <div className="location-header nav justify-content-center">
        <Link to="/one-way">
          <div className="location-header-arrow fa fa-arrow-left" style={{fontSize: "1.5em", position: "fixed", margin: "20px 10px"}}></div>
        </Link>
        <h2 className="location-header-text">Select Payment Method</h2>
      </div>
      <div className="animated slideInRight">
        <div className="black-bar">
          <div className="yellow-progress" style={{width: "60%"}}></div>
        </div>
        <div className="origin-destination">
          {/* <div className="origin-destination-third">{props.clickedOrigin}</div>
          <div className="origin-destination-middle fa fa-arrow-right" id="arrow-right" style={{fontSize: "1em", color: "white", fontWeight: "300"}}></div>
          <div className="origin-destination-third">{props.clickedDestination}</div>
          <div className="origin-destination-next">{props.ticketType}</div> */}

          <div className="origin-destination-third">{props.clickedOrigin}</div>
          <div className="origin-destination-middle fa fa-arrow-right" id="arrow-right" style={{fontSize: "1em", color: "white", fontWeight: "300"}}></div>
          <div className="origin-destination-third">{props.clickedDestination}</div><br/>
          <div className="origin-destination-next">{props.ticketType}</div>
          <div className="origin-destination-next">{props.ticket}</div>
        </div>
        <div className="cost-wrapper">
          <div className="cost-total">Total:</div>
          <div className="cost-price">{props.cost}</div>
        </div>
        <div className="split-payments">Split Payment<i className="payment-toggle fa fa-toggle-off" style={{color: "gray", fontSize: "1.4em"}}></i></div>
        <div className="payment-method">Payment methods</div>
        {/* <div className="location-list-blah">
          <Link to='/ten-trip'>
            <div className="ticket-each" onClick={props.handleTicketType} id="Ten Trip">Ten Trip<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
          </Link>
        </div> */}

        <Link to='/card-info'>
          <div className="payment-each">American Express<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
        </Link>
        {/* <Link to='/origin'> */}
          <div className="payment-each">Pay with New Card<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
        {/* </Link> */}
        {/* <Link to='/origin'> */}
          <div className="payment-each">Pay with PasterPass<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default PaymentMethod;
