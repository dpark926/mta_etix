import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import handleClick from '../actions/clickActions';
import Header from './Header';
import BlackBar from './BlackBar';
import '../../styles/TicketType.css';

class TicketType extends Component {
  handleTicketType = (event) => {
    this.props.handleTicketType( event.target.id );
  }

  render() {
    return (
      <div className='test'>
        <div className="header-container">
          <Header
            headerTitle='Select Ticket Type'
            previousLink='/destination'
          />
          <BlackBar
            yellowWidth='30%'
          />
          <div className="origin-destination" style={{paddingBottom: '5px'}}>
            <div className="origin-destination-third">{this.props.clickReducer.clickedOrigin}</div>
            <div className="origin-destination-middle fa fa-arrow-right" id="arrow-right" style={{fontSize: "1em", color: "white", fontWeight: "300"}}></div>
            <div className="origin-destination-third">{this.props.clickReducer.clickedDestination}</div>
          </div>
        </div>

        <div className="location-list-wrapper-ticket animated slideInRight">
          <div div className="location-list">
            <div className="location-list-blah">
              <Link to='/ten-trip'>
                <div className="ticket-each" onClick={ this.handleTicketType } id="Ten Trip">Ten Trip<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
              </Link>
            </div>
            <div className="location-list-blah">
              <Link to='/monthly'>
                <div className="ticket-each" onClick={ this.handleTicketType } id="Monthly">Monthly<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
              </Link>
            </div>
            <div className="location-list-blah">
              <Link to='/one-way'>
                <div className="ticket-each" onClick={ this.handleTicketType } id="One Way">One Way<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
              </Link>
            </div>
            <div className="location-list-blah">
              <Link to='/round-trip'>
                <div className="ticket-each" onClick={ this.handleTicketType } id="Round Trip">Round Trip<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
              </Link>
            </div>
            <div className="location-list-blah">
              <Link to='/weekly'>
                <div className="ticket-each" onClick={ this.handleTicketType } id="Weekly">Weekly<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {
  handleTicketType: handleClick.handleTicketType
}

export default connect( mapStateToProps, mapActionsToProps )( TicketType );
