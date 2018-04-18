import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import '../../../styles/Ticket.css';

function Monthly (props) {

  return (
    <div className='test'>
      <div className="header-container">
        <Header
          headerTitle='Select Ticket'
          previousLink='/ticket-type'
        />
        <div className="black-bar">
          <div className="yellow-progress" style={{width: "50%"}}></div>
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
          <div className="ticket-each" onClick={props.handleTicket} id="Monthly, $226.00">
            <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Monthly</div>
            <div className='ticket-price'>$226.00<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Monthly;
