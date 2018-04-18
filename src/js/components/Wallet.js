import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Wallet.css';

function Wallet (props) {
  return (
    <div className='test'>
      <div className="location-header nav justify-content-center">
        <Link to="/card-info">
          <div className="location-header-arrow fa fa-arrow-left" style={{fontSize: "1.5em"}}></div>
        </Link>
        <h2 className="location-header-text">Ticket Wallet</h2>
      </div>
      <div className='wallet-wrapper'>
        <div className='wallet-toggle-wrapper'>
          <div className='wallet-toggle-ticket'>Tickets</div>
          <div className='wallet-toggle-history'>History</div>
        </div>
        <Link to='/access'>
          <div className='wallet-ticket-wrapper'>
            <div className='wallet-ticket-top'>
              <div>{props.ticketType}</div>
              <div>{props.ticket}</div>
            </div>
            <div className='wallet-ticket-bottom'>
              <div>{props.clickedOrigin}</div>
              <div><i className='fa fa-long-arrow-right'></i>{props.clickedDestination}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Wallet;
