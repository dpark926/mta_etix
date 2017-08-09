import React, { Component } from 'react';
import TimeContainer from './TimeContainer.js'
import ColorBlock from '../components/ColorBlock.js'
import Button from '../components/Button.js'
import Barcode from '../components/Barcode.js'
import barcodeImg from '../styles/imgs/2d-barcode.png'

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
        <div className="app-container">

          <div className='time-block-wrapper'>
            <TimeContainer handleClick={this.handleClick}/>
            <ColorBlock handleClick={this.handleClick}/>
          </div>
          <a href='#'><Button handleClick={this.handleClick}/></a>
        </div>
      );
    } else {
      return (
        <div className="app-container">
          <Barcode/>
          <img src={barcodeImg}></img>
          <a href='#'><Button handleClick={this.handleClick}/></a>
        </div>
      );
    }
  }
}

export default AppContainer;
