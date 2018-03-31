import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/Ticket.css'

function RoundTrip (props) {

  return (
    <div className='test'>
      <div className="header-container">
        <div className="location-header nav justify-content-center">
          <Link to="/ticket-type">
            <div className="location-header-arrow fa fa-arrow-left" style={{fontSize: "1.5em"}}></div>
          </Link>
          <h2 className="location-header-text">Select Ticket</h2>
          <div className="black-bar">
            <div className="yellow-progress" style={{width: "50%"}}></div>
          </div>
        </div>
        <div className="origin-destination" style={{paddingBottom: '5px'}}>
          <div className="origin-destination-third">{props.clickedOrigin}</div>
          <div className="origin-destination-middle fa fa-arrow-right" id="arrow-right" style={{fontSize: "1em", color: "white", fontWeight: "300"}}></div>
          <div className="origin-destination-third">{props.clickedDestination}</div><br/>
          <div className="origin-destination-next">{props.ticketType}</div>
        </div>
        <div className='tab-wrapper'>
          <div className="single-tab">Single</div>
          <div className="multiple-tab">Multiple</div>
        </div>
      </div>
      <div className="ticket-list-wrapper animated slideInRight">
        <Link to='/accept'>
          <div className="ticket-each" onClick={props.handleTicket} id="Peak, $20.50">
            <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Peak</div>
            <div className='ticket-price'>$20.50<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
          </div>
        </Link>
        <Link to='/accept'>
          <div className="ticket-each" onClick={props.handleTicket} id="Off Peak, $15.00">
            <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Off Peak</div>
            <div className='ticket-price'>$15.00<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
          </div>
        </Link>
        <Link to='/accept'>
          <div className="ticket-each" onClick={props.handleTicket} id="Senior, $10.00">
            <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Senior</div>
            <div className='ticket-price'>$10.00<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
          </div>
        </Link>
        <Link to='/accept'>
          <div className="ticket-each" onClick={props.handleTicket} id="Family, $2.00">
            <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Family</div>
            <div className='ticket-price'>$2.00<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
          </div>
        </Link>
        <Link to='/accept'>
          <div className="ticket-each" onClick={props.handleTicket} id="Military, $15.00">
            <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Military</div>
            <div className='ticket-price'>$15.00<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
          </div>
        </Link>
        <Link to='/accept'>
          <div className="ticket-each" onClick={props.handleTicket} id="Disable, $10.00">
            <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Disabled / Medicare</div>
            <div className='ticket-price'>$10.00<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
          </div>
        </Link>
        <Link to='/accept'>
          <div className="ticket-each" onClick={props.handleTicket} id="Child Peak, $10.00">
            <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Child Peak</div>
            <div className='ticket-price'>$10.00<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
          </div>
        </Link>
        <Link to='/accept'>
          <div className="ticket-each" onClick={props.handleTicket} id="Child Off, $7.00">
            <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Child Off Peak</div>
            <div className='ticket-price'>$7.00<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default RoundTrip;
