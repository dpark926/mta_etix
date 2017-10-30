import React from 'react';
import { Link } from 'react-router-dom'

function CardInfo () {

  return (
    <div>
      <div className="location-header nav justify-content-center">
        <h2 className="location-header-text">Card Info</h2>
      </div>
      <div className="animated slideInRight">
        <p>This is the Card Info Page</p>
        <div>Security Code</div>
        <div>Please enter a security code at least 3 digits long</div>
        <div>Enter the email address below that you would like your receipt sent to.</div>
        <div>Your E-mail</div>
        <div>This ticket purchase is subject to accepting the terms and conditions</div>
        <Link to='/access'><div>Accept & Pay </div></Link>
      </div>
    </div>
  )
}

export default CardInfo;
