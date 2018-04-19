import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import BlackBar from './BlackBar';
import Disclaimer from './Disclaimer';
import '../../styles/Accept.css';

function Accept (props) {
  return (
    <div className='test'>
      <Header
        headerTitle='Select Ticket Type'
        previousLink='/ticket-type'
      />
      <BlackBar
        yellowWidth='50%'
      />
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
          <Disclaimer
            ticketType={ props.ticketType }
            ticket={ props.ticket }
          />
        </div>
        <Link to='/payment-method'>
          <div className='accept-button'>Accept & Continue</div>
        </Link>
      </div>
    </div>
  )
}

export default Accept;
