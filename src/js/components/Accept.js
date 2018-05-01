import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import BlackBar from './BlackBar';
import Disclaimer from './Disclaimer';
import '../../styles/Accept.css';

class Accept extends Component {
  render() {
    return (
      <div className='test'>
        <Header
          headerTitle='Select Ticket Type'
          previousLink='/ticket-type'
        />
        <BlackBar
          yellowWidth='50%'
        />
        <div className="origin-destination" style={{paddingBottom: '5px'}}>
          <div className="origin-destination-third">{ this.props.clickReducer.clickedOrigin}</div>
          <div className="origin-destination-middle fa fa-arrow-right" id="arrow-right" style={{fontSize: "1em", color: "white", fontWeight: "300"}}></div>
          <div className="origin-destination-third">{ this.props.clickReducer.clickedDestination}</div><br/>
          <div className="origin-destination-next">{ this.props.clickReducer.ticketType}</div>
          <div className="origin-destination-next">{ this.props.clickReducer.ticket}</div>
        </div>
        <div className='tab-wrapper'>
          <div className="single-tab">Single</div>
          <div className="multiple-tab">Multiple</div>
        </div>
        <div className='accept-wrapper animated slideInUp'>
          <div className="accept-header-wrapper">
            <div className="accept-header">Ticket regulations</div>
            <Link to="/ticket-type">
              <div className="accept-header fa fa-times" style={{float: "right", fontSize: "1.2em"}}></div>
            </Link>
          </div>
          <div className='disclaimer'>
            <div className='disclaimer-tickettypes'>
              <span>{ this.props.clickReducer.ticketType}</span>
              <span>{ this.props.clickReducer.ticket}</span>
            </div>
            <Disclaimer
              ticketType={ this.props.clickReducer.ticketType }
              ticket={ this.props.clickReducer.ticket }
            />
          </div>
          <Link to='/payment-method'>
            <div className='accept-button'>Accept & Continue</div>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect( mapStateToProps )( Accept );
