import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Ticket.css'

function OneWay (props) {

  return (
    <div>
      <div className="location-header nav justify-content-center">
        <h2 className="location-header-text">Select Ticket</h2>
      </div>
      <div className="animated slideInRight">
        <div className="origin-destination">
          <div className="origin-destination-third">{props.clickedOrigin}</div>
          <div className="origin-destination-middle fa fa-long-arrow-right" id="arrow-right"></div>
          <div className="origin-destination-third">{props.clickedDestination}</div>
          <div className="origin-destination-third">{props.ticketType}</div>
        </div>
        <div>
          <div>Single</div>
          <div>Multiple</div>
        </div>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Peak, $10.25">
            <div className='ticket-type'>Peak</div>
            <div className='ticket-price'>$10.25<span className="ticket-arrow">{'>'}</span></div>
          </div>
        </Link>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Off Peak, $7.25">
            <div className='ticket-type'>Off Peak</div>
            <div className='ticket-price'>$7.25<span className="ticket-arrow">{'>'}</span></div>
          </div>
        </Link>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Senior, $5.00">
            <div className='ticket-type'>Senior</div>
            <div className='ticket-price'>$5.00<span className="ticket-arrow">{'>'}</span></div>
          </div>
        </Link>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Family, $1.00">
            <div className='ticket-type'>Family</div>
            <div className='ticket-price'>$1.00<span className="ticket-arrow">{'>'}</span></div>
          </div>
        </Link>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Military, $7.50">
            <div className='ticket-type'>Military</div>
            <div className='ticket-price'>$7.50<span className="ticket-arrow">{'>'}</span></div>
          </div>
        </Link>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Disable, $5.00">
            <div className='ticket-type'>Disabled / Medicare</div>
            <div className='ticket-price'>$5.00<span className="ticket-arrow">{'>'}</span></div>
          </div>
        </Link>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Child Peak, $5.00">
            <div className='ticket-type'>Child Peak</div>
            <div className='ticket-price'>$5.00<span className="ticket-arrow">{'>'}</span></div>
          </div>
        </Link>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Child Off, $3.50">
            <div className='ticket-type'>Child Off Peak</div>
            <div className='ticket-price'>$3.50<span className="ticket-arrow">{'>'}</span></div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default OneWay;
