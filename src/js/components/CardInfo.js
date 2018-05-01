import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import handleType from '../actions/typeActions';
import Header from './Header';
import BlackBar from './BlackBar';
import '../../styles/CardInfo.css';

class CardInfo extends Component {
  handleSecCode = (event) => {
    this.props.handleSecCode( event.target.value );
  }

  render() {
    return (
      <div className='test'>
        <div className="header-container">
          <Header
            headerTitle='Enter Card Information'
            previousLink='/payment-method'
          />
          <BlackBar
            yellowWidth='100%'
          />
          <div className="origin-destination" style={{paddingBottom: '5px'}}>
            <div className="origin-destination-third">{ this.props.clickReducer.clickedOrigin}</div>
            <div className="origin-destination-middle fa fa-arrow-right" id="arrow-right" style={{fontSize: "1em", color: "white", fontWeight: "300"}}></div>
            <div className="origin-destination-third">{ this.props.clickReducer.clickedDestination}</div><br/>
            <div className="origin-destination-next">{ this.props.clickReducer.ticketType}</div>
            <div className="origin-destination-next">{ this.props.clickReducer.ticket}</div>
          </div>
          <div className="cost-wrapper">
            <div className="cost-total">Total:</div>
            <div className="cost-price">{ this.props.clickReducer.cost}</div>
          </div>
        </div>
        <div className="card-info-wrapper animated slideInRight">
          <div className='card-info-section'>
            <div className='card-info-header'>Security Code</div>
            <input className='security-code-input' type='text' onChange={ this.handleSecCode}></input>
            <div className='card-info-error'>Please enter a security code at least 3 digits long</div>
            <div className='card-info-instruction'>Enter the email address below that you would like your receipt sent to.</div>
            <div className='card-info-header'>Your E-mail</div>
            <input className='email-input' type='text' onChange={ this.handleSecurityCode} placeholder='dpeace926@yahoo.com'></input>
            <div className='card-info-disclaimer'>This ticket purchase is subject to accepting the terms and conditions</div>
          </div>
          { this.props.typeReducer.secCode.length >= 3 ?
          <Link to='/wallet'>
            <div className='accept-pay-button'>
              <span className="lock-icon fa fa-lock" style={{fontSize: "1.2em"}}></span>
              Accept & Pay
            </div>
          </Link> :
          <div className='accept-pay-button' style={{backgroundColor: "#c0c5ce"}}>
            <span className="lock-icon fa fa-lock" style={{fontSize: "1.2em"}}></span>
            Accept & Pay
          </div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {
  handleSecCode: handleType.handleSecCode
}

export default connect( mapStateToProps, mapActionsToProps )( CardInfo );
