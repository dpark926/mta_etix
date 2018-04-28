import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import handleClick from '../../actions/clickActions';
import Header from '../Header';
import '../../../styles/Ticket.css';

class TenTrip extends Component {
  handleTicket = (event) => {
    this.props.handleTicket( event.currentTarget.id );
  }

  render() {
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
            <div className="origin-destination-third">{ this.props.clickReducer.clickedOrigin}</div>
            <div className="origin-destination-middle fa fa-arrow-right" id="arrow-right" style={{fontSize: "1em", color: "white", fontWeight: "300"}}></div>
            <div className="origin-destination-third">{ this.props.clickReducer.clickedDestination}</div><br/>
            <div className="origin-destination-next">{ this.props.clickReducer.ticketType}</div>
          </div>
          <div className='tab-wrapper'>
            <div className="single-tab">Single</div>
            <div className="multiple-tab">Multiple</div>
          </div>
        </div>

        <div className="ticket-list-wrapper animated slideInRight">
          <Link to='/accept'>
            <div className="ticket-each" onClick={ this.handleTicket } id="Peak, $102.50">
              <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Peak</div>
              <div className='ticket-price'>$102.50<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
            </div>
          </Link>
          <Link to='/accept'>
            <div className="ticket-each" onClick={ this.handleTicket } id="Off Peak, $63.75">
              <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Off Peak</div>
              <div className='ticket-price'>$63.75<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
            </div>
          </Link>
          <Link to='/accept'>
            <div className="ticket-each" onClick={ this.handleTicket } id="Senior, $50.00">
              <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Senior / Disabled / Medicare</div>
              <div className='ticket-price'>$50.00<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {
  handleTicket: handleClick.handleTicket
}

export default connect( mapStateToProps, mapActionsToProps )( TenTrip );
