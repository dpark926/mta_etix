import React from 'react'
import { Link } from 'react-router-dom'

function Wallet (props) {
  return (
    <div className='activate-box animated jello' onClick={props.handleActivate}>
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
      <Link to='/access'><div className='text'><h1>Activate!</h1></div></Link>
    </div>
  )
}

export default Wallet
