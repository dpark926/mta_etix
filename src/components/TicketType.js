import React from 'react';
import { Link } from 'react-router-dom'

function TicketType (props) {

  return (
    <div>
      <div className="location-header nav justify-content-center">
        <Link to="/destination">
          <div className="location-header-arrow fa fa-arrow-left" style={{fontSize: "1.5em", position: "fixed", margin: "20px 10px"}}></div>
        </Link>
        <h2 className="location-header-text">Select Ticket Type</h2>
      </div>
      <div className="ticket-list animated slideInRight">
        <div className="black-bar">
          <div className="yellow-progress" style={{width: "30%"}}></div>
        </div>
        <div className="origin-destination">
          <div className="origin-destination-third">{props.clickedOrigin}</div>
          <div className="origin-destination-middle fa fa-arrow-right" id="arrow-right" style={{fontSize: "1em", color: "white", fontWeight: "300"}}></div>
          <div className="origin-destination-third">{props.clickedDestination}</div>
        </div>

        <div className="location-list-blah">
          <Link to='/ten-trip'>
            <div className="ticket-each" onClick={props.handleTicketType} id="Ten Trip">Ten Trip<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
          </Link>
        </div>
        <div className="location-list-blah">
          <Link to='/monthly'>
            <div className="ticket-each" onClick={props.handleTicketType} id="Monthly">Monthly<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
          </Link>
        </div>
        <div className="location-list-blah">
          <Link to='/one-way'>
            <div className="ticket-each" onClick={props.handleTicketType} id="One Way">One Way<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
          </Link>
        </div>
        <div className="location-list-blah">
          <Link to='/round-trip'>
            <div className="ticket-each" onClick={props.handleTicketType} id="Round Trip">Round Trip<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
          </Link>
        </div>
        <div className="location-list-blah">
          <Link to='/weekly'>
            <div className="ticket-each" onClick={props.handleTicketType} id="Weekly">Weekly<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TicketType;
