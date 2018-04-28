import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import '../../styles/Wallet.css';

class Wallet extends Component {
  render() {
    return (
      <div className='test'>
        <Header
          headerTitle='Ticket Wallet'
          previousLink='/card-info'
        />
        <div className='wallet-wrapper'>
          <div className='wallet-toggle-wrapper'>
            <div className='wallet-toggle-ticket'>Tickets</div>
            <div className='wallet-toggle-history'>History</div>
          </div>
          <Link to='/access'>
            <div className='wallet-ticket-wrapper'>
              <div className='wallet-ticket-top'>
                <div>{ this.props.clickReducer.ticketType}</div>
                <div>{ this.props.clickReducer.ticket}</div>
              </div>
              <div className='wallet-ticket-bottom'>
                <div>{ this.props.clickReducer.clickedOrigin}</div>
                <div><i className='fa fa-long-arrow-right'></i>{ this.props.clickReducer.clickedDestination}</div>
              </div>
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

export default connect( mapStateToProps )( Wallet );
