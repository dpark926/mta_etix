import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import handleClick from '../../actions/clickActions';
import Header from '../Header';
import '../../../styles/Ticket.css';

class OneWay extends Component {
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
            <div className="origin-destination-third">{ this.props.clickReducer.clickedOrigin }</div>
            <div className="origin-destination-middle fa fa-arrow-right" id="arrow-right" style={{fontSize: "1em", color: "white", fontWeight: "300"}}></div>
            <div className="origin-destination-third">{ this.props.clickReducer.clickedDestination }</div><br/>
            <div className="origin-destination-next">{ this.props.clickReducer.ticketType }</div>
          </div>
          <div className='tab-wrapper'>
            <div className="single-tab">Single</div>
            <div className="multiple-tab">Multiple</div>
          </div>
        </div>
        <div className="ticket-list-wrapper animated slideInRight">
          {/* <div className="location-list-blah">
            <Link to='/ten-trip'>
              <div className="ticket-each" onClick={props.handleTicketType} id="Ten Trip">Ten Trip<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
            </Link>
          </div> */}
          <Link to='/accept'>
            <div className="ticket-each" onClick={ this.handleTicket } id="Peak, $10.25">
              <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Peak</div>
              <div className='ticket-price'>$10.25<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
            </div>
          </Link>
          <Link to='/accept'>
            <div className="ticket-each" onClick={ this.handleTicket } id="Off Peak, $7.25">
              <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Off Peak</div>
              <div className='ticket-price'>$7.25<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
            </div>
          </Link>
          <Link to='/accept'>
            <div className="ticket-each" onClick={ this.handleTicket } id="Senior, $5.00">
              <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Senior</div>
              <div className='ticket-price'>$5.00<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
            </div>
          </Link>
          <Link to='/accept'>
            <div className="ticket-each" onClick={ this.handleTicket } id="Family, $1.00">
              <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Family</div>
              <div className='ticket-price'>$1.00<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
            </div>
          </Link>
          <Link to='/accept'>
            <div className="ticket-each" onClick={ this.handleTicket } id="Military, $7.50">
              <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Military</div>
              <div className='ticket-price'>$7.50<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
            </div>
          </Link>
          <Link to='/accept'>
            <div className="ticket-each" onClick={ this.handleTicket } id="Disable, $5.00">
              <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Disabled / Medicare</div>
              <div className='ticket-price'>$5.00<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
            </div>
          </Link>
          <Link to='/accept'>
            <div className="ticket-each" onClick={ this.handleTicket } id="Child Peak, $5.00">
              <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Child Peak</div>
              <div className='ticket-price'>$5.00<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
            </div>
          </Link>
          <Link to='/accept'>
            <div className="ticket-each" onClick={ this.handleTicket } id="Child Off, $3.50">
              <div className='ticket-type'><i className="info-circle fa fa-info-circle" style={{color: "#3b5998", fontSize: "1.1em"}}></i>Child Off Peak</div>
              <div className='ticket-price'>$3.50<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em", paddingLeft: "10px"}}></span></div>
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

export default connect( mapStateToProps, mapActionsToProps )( OneWay );
