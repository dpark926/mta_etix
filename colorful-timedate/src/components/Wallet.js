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
      <div>
        <div>Tickets</div>
        <div>History</div>
      </div>
      <Link to='/access'>
        <div>
          <div>{props.ticketType}</div>
          <div>{props.ticket}</div>
        </div>
        <div className='text'>
          <div>{props.clickedOrigin}</div>
          <div>{props.clickedDestination}</div>
        </div>
      </Link>
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
