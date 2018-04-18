import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../../styles/Wallet.css';

function Wallet (props) {
  return (
    <div className='test'>
      <Header
        headerTitle='Ticket Wallet'
        previousLink='/card-info'
      />
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
