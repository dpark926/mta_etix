import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import TimeContainer from './TimeContainer.js'
import ColorBlock from '../components/ColorBlock.js'
import Button from '../components/Button.js'
import Barcode from '../components/Barcode.js'
import '../styles/AppContainer.css'

class AppContainer extends Component {
  constructor() {
    super()

    this.state = {
      clicked: false,
      activated: (new Date()).toLocaleTimeString(),
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    if (this.state.clicked === false) {
      return (
        <div className="app-container">
          <div className="location-header nav justify-content-center">
            <Link to="/one-way">
              <div className="location-header-arrow fa fa-arrow-left" style={{fontSize: "1.5em", position: "fixed", margin: "20px 10px"}}></div>
            </Link>
            <h2 className="location-header-text">Select Payment Method</h2>
          </div>
          <div className='time-block-button-wrapper animated slideInDown'>
            <div className='time-block-wrapper'>
              <TimeContainer handleClick={this.handleClick}/>
              <ColorBlock handleClick={this.handleClick}/>
              <div>Tap to reveal barcode</div>
            </div>
            <a href='#'><Button handleClick={this.handleClick} clicked={this.state.clicked}/></a>
          </div>
          <div>Ticket activated at {this.state.activated.slice(0, 5)} {this.state.activated.slice(-2)}</div>
          <div>Activated at: </div>
        </div>
      );
    } else {
      return (
        <div className="app-container">
          <div className='time-block-button-wrapper animated slideInUp'>
            <div className='time-block-wrapper'>
              <Barcode/>
              <div>Tap to reveal barcode</div>
            </div>
            <a href='#'><Button handleClick={this.handleClick} clicked={this.state.clicked}/></a>
          </div>
          <div>Ticket activated at {this.state.activated.slice(0, 5)} {this.state.activated.slice(-2)}</div>
          <div>Activated at: {this.state.activated}</div>
        </div>
      );
    }
  }
}

// Link?
// hide?

export default AppContainer;
