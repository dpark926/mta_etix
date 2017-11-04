import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/CardInfo.css'

function CardInfo (props) {

  return (
    <div>
      <div className="location-header nav justify-content-center">
        <Link to="/payment-method">
          <div className="location-header-arrow fa fa-arrow-left" style={{fontSize: "1.5em", position: "fixed", margin: "20px 10px"}}></div>
        </Link>
        <h2 className="location-header-text">Enter Card Information</h2>
      </div>
      <div className="animated slideInRight">
        <div className="black-bar">
          <div className="yellow-progress" style={{width: "100%"}}></div>
        </div>
        <div className="origin-destination">
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

        <div className='card-info-section'>
          <div className='card-info-header'>Security Code</div>
          <input className='security-code-input' type='text' onChange={props.handleSecCode}></input>
          <div className='card-info-error'>Please enter a security code at least 3 digits long</div>
          <div className='card-info-instruction'>Enter the email address below that you would like your receipt sent to.</div>
          <div className='card-info-header'>Your E-mail</div>
          <input className='email-input' type='text' onChange={props.handleSecurityCode} placeholder='dpeace926@yahoo.com'></input>
          <div className='card-info-disclaimer'>This ticket purchase is subject to accepting the terms and conditions</div>
        </div>
        {props.secCode.length >= 3 ?
        <Link to='/wallet'>
          <div className='accept-pay-button'>
            <span className="lock-icon fa fa-lock" style={{fontSize: "1.2em"}}></span>
            Accept & Pay
          </div>
        </Link> :
        <div className='accept-pay-button' style={{backgroundColor: "#c0c5ce"}}>
          <span className="lock-icon fa fa-lock" style={{fontSize: "1.2em"}}></span>
          Accept & Pay
        </div>
        }
      </div>
    </div>
  )
}

export default CardInfo;
