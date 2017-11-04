import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Accept.css'

function Accept () {

  return (
    <div>
      <div className="location-header nav justify-content-center">
        <h2 className="location-header-text">Select Ticket Type</h2>
      </div>
      <div className='accept-wrapper animated slideInUp'>
        <div className='disclaimer'>
          <div className="accept-header-wrapper">
            <div className="accept-header">Ticket regulations</div>
            <div className="accept-header fa fa-times" style={{float: "right", fontSize: "1.2em"}}></div>
          </div>
          <ul>
            <li>Good for one ride between the zones or stations indicated on the ticket durring off-peak hours only and is subject to step-up on Peak trains.</li>
            <li>Charged on any train NOT scheduled to arrive in NYC terminals between 6am and 10am or departing NYC terminals between 4pm and 8pm weekdays and select holidays.</li>
            <li>Valid for 60 days (including date of sale).</li>
            <li>Tickets purchased in error may be cancelled within 5 minutes or purchase without the $10 fee being applied.</li>
            <li>Ticket must be activated prior to boarding train for use.</li>
            <li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li>
            <li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li>
            <li>Subject to applicable tariff regulations and conditions of use.</li>
          </ul>
        </div>
        <Link to='/payment-method'>
          <div className='accept-button'>Accept & Continue</div>
        </Link>
      </div>
    </div>
  )
}

export default Accept;
