import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Wallet.css'

function Wallet (props) {
  return (
    <div className='activate-box animated slideInRight' onClick={props.handleActivate}>
      <div className="location-header nav justify-content-center">
        <Link to="/buytickets">
          <div className="location-header-arrow fa fa-arrow-left" style={{fontSize: "1.5em", position: "fixed", margin: "20px 10px"}}></div>
        </Link>
        <h2 className="location-header-text">Ticket Wallet</h2>
      </div>
      <div className='wallet-toggle-wrapper'>
        <div className='wallet-toggle-ticket'>Tickets</div>
        <div className='wallet-toggle-history'>History</div>
      </div>
      <div className='wallet-ticket-wrapper'>
        <Link to='/access'>
          <div className='wallet-ticket-top'>
            <div>{props.ticketType}</div>
            <div>{props.ticket}</div>
          </div>
          <div className='wallet-ticket-bottom'>
            <div>{props.clickedOrigin}</div>
            <div><i className='fa fa-long-arrow-right'></i>{props.clickedDestination}</div>
          </div>
        </Link>
      </div>
    </div>
  )
}
// clickedOrigin={this.state.clickedOrigin}
// clickedDestination={this.state.clickedDestination}
// ticketType={this.state.ticketType}
// handleSecCode={this.handleSecCode}
// secCode={this.state.secCode}
// ticket={this.state.ticket}/>}

export default Wallet
