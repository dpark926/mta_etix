import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/BuyTickets.css'

function BuyTickets () {

  return (
    <div>
      <div className="location-header nav justify-content-center">
        <h2 className="location-header-text">MTA eTix</h2>
      </div>
      <div className="animated slideInRight">
        <Link to='/origin'>
          <div className="button">Buy Tickets</div>
        </Link>
        {/* <Link to='/origin'> */}
          <div className="button">Ticket Wallet</div>
        {/* </Link> */}
        {/* <Link to='/origin'> */}
          <div className="button">Train Time</div>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default BuyTickets;
