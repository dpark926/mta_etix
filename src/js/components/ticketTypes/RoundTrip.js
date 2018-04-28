import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import handleClick from '../../actions/clickActions';
import Header from '../Header';
import '../../../styles/Ticket.css';

class RoundTrip extends Component {
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
            <div className="ticket-each" onClick={ this.handleTicket } id="Peak, $20.50">
              <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Peak</div>
              <div className='ticket-price'>$20.50<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
            </div>
          </Link>
          <Link to='/accept'>
            <div className="ticket-each" onClick={ this.handleTicket } id="Off Peak, $15.00">
              <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Off Peak</div>
              <div className='ticket-price'>$15.00<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
            </div>
          </Link>
          <Link to='/accept'>
            <div className="ticket-each" onClick={ this.handleTicket } id="Senior, $10.00">
              <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Senior</div>
              <div className='ticket-price'>$10.00<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
            </div>
          </Link>
          <Link to='/accept'>
            <div className="ticket-each" onClick={ this.handleTicket } id="Family, $2.00">
              <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Family</div>
              <div className='ticket-price'>$2.00<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
            </div>
          </Link>
          <Link to='/accept'>
            <div className="ticket-each" onClick={ this.handleTicket } id="Military, $15.00">
              <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Military</div>
              <div className='ticket-price'>$15.00<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
            </div>
          </Link>
          <Link to='/accept'>
            <div className="ticket-each" onClick={ this.handleTicket } id="Disable, $10.00">
              <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Disabled / Medicare</div>
              <div className='ticket-price'>$10.00<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
            </div>
          </Link>
          <Link to='/accept'>
            <div className="ticket-each" onClick={ this.handleTicket } id="Child Peak, $10.00">
              <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Child Peak</div>
              <div className='ticket-price'>$10.00<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
            </div>
          </Link>
          <Link to='/accept'>
            <div className="ticket-each" onClick={ this.handleTicket } id="Child Off, $7.00">
              <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Child Off Peak</div>
              <div className='ticket-price'>$7.00<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
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

export default connect( mapStateToProps, mapActionsToProps )( RoundTrip );
