import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Accept.css'

function Accept (props) {

  return (
    <div className='test'>
      <div className="location-header nav justify-content-center">
        <Link to="/ticket-type">
          <div className="location-header-arrow fa fa-arrow-left" style={{fontSize: "1.5em"}}></div>
        </Link>
        <h2 className="location-header-text">Select Ticket Type</h2>
      </div>
      <div className="black-bar">
        <div className="yellow-progress" style={{width: "50%"}}></div>
      </div>
      <div className="origin-destination" style={{paddingBottom: '5px'}}>
        <div className="origin-destination-third">{props.clickedOrigin}</div>
        <div className="origin-destination-middle fa fa-arrow-right" id="arrow-right" style={{fontSize: "1em", color: "white", fontWeight: "300"}}></div>
        <div className="origin-destination-third">{props.clickedDestination}</div><br/>
        <div className="origin-destination-next">{props.ticketType}</div>
        <div className="origin-destination-next">{props.ticket}</div>
      </div>
      <div className='tab-wrapper'>
        <div className="single-tab">Single</div>
        <div className="multiple-tab">Multiple</div>
      </div>

      <div className='accept-wrapper animated slideInUp'>
        <div className="accept-header-wrapper">
          <div className="accept-header">Ticket regulations</div>
          <Link to="/ticket-type">
            <div className="accept-header fa fa-times" style={{float: "right", fontSize: "1.2em"}}></div>
          </Link>
        </div>

        <div className='disclaimer'>
          <div className='disclaimer-tickettypes'>
            <span>{props.ticketType}</span>
            <span>{props.ticket}</span>
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
