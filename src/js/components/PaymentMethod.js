import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../../styles/PaymentMethod.css';
import amexLogo from '../../styles/imgs/amex_logo.jpeg';
import plusAddIcon from '../../styles/imgs/plus_add_icon.png';
import masterpassIcon from '../../styles/imgs/masterpass_icon.png';

function PaymentMethod (props) {

  return (
    <div className='test'>
      <Header
        headerTitle='Select Payment Method'
        previousLink='/one-way'
      />
      <div className="black-bar">
        <div className="yellow-progress" style={{width: "60%"}}></div>
      </div>
      <div className="origin-destination" style={{paddingBottom: '5px'}}>
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

      <div className="animated slideInRight">
        <Link to='/card-info'>
          <div className="payment-each">
            <span className="payment-icon"><img src={amexLogo}></img></span>
            <span>American Express</span>
            <span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span>
          </div>
        </Link>
        {/* <Link to='/origin'> */}
          <div className="payment-each">
            <span className="payment-icon"><img src={plusAddIcon}></img></span>
            <span>Pay with New Card</span>
            <span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
        {/* </Link> */}
        {/* <Link to='/origin'> */}
          <div className="payment-each">
            <span className="payment-icon"><img src={masterpassIcon}></img></span>
            <span>Pay with MasterPass</span>
            <span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default PaymentMethod;
