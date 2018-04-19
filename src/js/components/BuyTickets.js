import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/BuyTickets.css';
import logo from '../../styles/imgs/mta_logo.png';
import buyTicket from '../../styles/imgs/buy-ticket.png';
import wallet from '../../styles/imgs/wallet.png';
import trainTime from '../../styles/imgs/train_time.png';
import topTicket from '../../styles/imgs/top_ticket.png';

function BuyTickets () {

  return (
    <div className="test">
      <div className='header-container'>
        <div className="location-header nav justify-content-center">
          <div className="location-header-bars fa fa-bars" style={{fontSize: "1.5em"}}></div>
          <h2 className="location-header-text"><img src={ logo }></img></h2>
        </div>
      </div>
      <div className="buy-tickets-wrapper">
        <Link to='/origin'>
          <div className="button">
            <div className="buy-ticket-img"><img src={ buyTicket }></img></div>
            <div className="buy-ticket-text">Buy Tickets</div>
            <div className="buy-ticket-arrow fa fa-arrow-right"></div>
          </div>
        </Link>
        <Link to='/wallet'>
          <div className="button">
            <div className="buy-ticket-img"><img src={ wallet }></img></div>
            <div className="buy-ticket-text">Ticket Wallet</div>
            <div className="buy-ticket-arrow fa fa-arrow-right"></div>
          </div>
        </Link>
        <div className="buy-ticket-button-blue">
          <div className="buy-ticket-img"><img src={ topTicket }></img></div>
          <div className="buy-ticket-text">Your top tickets will appear here for quick access</div>
          <div className="buy-ticket-arrow"></div>
        </div>
        {/* <Link to='/origin'> */}
          <div className="button">
            <div className="buy-ticket-img"><img src={ trainTime }></img></div>
            <div className="buy-ticket-text">Train Time</div>
            <div className="buy-ticket-arrow fa fa-arrow-right"></div>
          </div>
        {/* </Link> */}
      </div>
    </div>

  )
}

export default BuyTickets;
