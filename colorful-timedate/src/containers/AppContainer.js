import React, { Component } from 'react';
import TimeContainer from './TimeContainer.js'
import ColorBlock from '../components/ColorBlock.js'
import Button from '../components/Button.js'
import Barcode from '../components/Barcode.js'

class AppContainer extends Component {
  constructor() {
    super()

    this.state = {
      clicked: false
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
        <div className="app-container animated slideInDown">
          <div className='time-block-wrapper'>
            <TimeContainer handleClick={this.handleClick}/>
            <ColorBlock handleClick={this.handleClick}/>
            <p>Tap to reveal barcode</p>
          </div>
          <a href='#'><Button handleClick={this.handleClick} clicked={this.state.clicked}/></a>
        </div>
      );
    } else {
      return (
        <div className="app-container animated slideInUp">
          <div className='time-block-wrapper'>
            <Barcode/>
            <p>Tap to view color bar</p>
          </div>
          <a href='#'><Button handleClick={this.handleClick} clicked={this.state.clicked}/></a>
        </div>
      );
    }
  }
}

// Link?
// hide?

export default AppContainer;
