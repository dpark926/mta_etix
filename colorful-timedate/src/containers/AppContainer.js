import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import TimeContainer from './TimeContainer.js'
import ColorBlock from '../components/ColorBlock.js'
import Button from '../components/Button.js'
import Barcode from '../components/Barcode.js'
import '../styles/AppContainer.css'

class AppContainer extends Component {
  constructor() {
    let divStyle = []

    for (var i = 0; i < 3; i++) {
      let threeColors = []
      for (var j = 0; j < 3; j ++) {
        let r = Math.floor(Math.random() * 256)
        threeColors.push(r)
      }

      divStyle.push('rgba(' + threeColors + ',1)')
    }

    super()

    this.state = {
      clicked: false,
      activated: (new Date()).toLocaleTimeString(),
      block1: divStyle[0],
      block2: divStyle[1],
      block3: divStyle[2],
      colorToggle: false,
    }
  }

  handleClick= () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  handleChangeComplete1 = (color) => {
    this.setState({ block1: color.hex });
  }

  handleChangeComplete2 = (color) => {
    this.setState({ block2: color.hex });
  }

  handleChangeComplete3 = (color) => {
    this.setState({ block3: color.hex });
  }

  toggleColor = () => {
    this.setState({
      colorToggle: !this.state.colorToggle
    })
  }

  render() {
    if (this.state.clicked === false) {
      return (
        <div className="app-container">
          <div className="location-header nav justify-content-center">
            <Link to="/one-way">
              <div className="location-header-arrow fa fa-arrow-left" style={{fontSize: "1.5em"}}></div>
            </Link>
            <h2 className="location-header-text">{this.props.ticketType} {this.props.ticket}</h2>
          </div>
          <div className='time-block-button-wrapper animated slideInDown'>
            <div className='time-block-wrapper'>
              <TimeContainer handleClick={this.handleClick}/>
              <ColorBlock
                handleClick={this.handleClick}
                block1={this.state.block1}
                block2={this.state.block2}
                block3={this.state.block3}
                colorToggle={this.state.colorToggle}
                handleChangeComplete1={this.handleChangeComplete1}
                handleChangeComplete2={this.handleChangeComplete2}
                handleChangeComplete3={this.handleChangeComplete3}
                toggleColor={this.toggleColor}
              />
              <div className='tap-button'>Tap to reveal barcode</div>
            </div>
          </div>
          <div className="app-container-lower">
            <a href='#'><Button handleClick={this.handleClick} clicked={this.state.clicked}/></a>
            <div className='ticket-activated-at'>Ticket activated at {this.state.activated.slice(0, 5)} {this.state.activated.slice(-2)}</div>
            <div className='ticket-type-info'>{this.props.ticketType} {this.props.ticket}</div>
            <div className='lirr'>Long Island Rail Road</div>
            <div className='ticket-area-code'>
              <div className='ticket-area-code-wrapper1'>
                <div className='ticket-area-code-origindest'>{this.props.clickedOrigin}</div>
                {this.props.clickedOrigin === "Penn Station" ? <div className='ticket-area-code-areanum'>1</div> : <div className='ticket-area-code-areanum'>3</div>}
                <div className='ticket-area-code-origindest'>{this.props.clickedDestination}</div>
                {this.props.clickedDestination === "Penn Station" ? <div className='ticket-area-code-areanum'>1</div> : <div className='ticket-area-code-areanum'>3</div>}
              </div>
              <div className='ticket-area-code-wrapper2'>
                <div className='ticket-area-code-circle'></div>
              </div>
            </div>
            <div className='ticket-type-info'>
              <div className='ticket-train-time'>Train Time</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="app-container">
          <div className="location-header nav justify-content-center">
            <Link to="/one-way">
              <div className="location-header-arrow fa fa-arrow-left" style={{fontSize: "1.5em", position: "fixed", margin: "20px 10px"}}></div>
            </Link>
            <h2 className="location-header-text">{this.props.ticketType} {this.props.ticket}</h2>
          </div>
          <div className='time-block-button-wrapper animated slideInUp'>
            <div className='time-block-wrapper'>
              <Barcode/>
              <div className='tap-button'>Tap to reveal color bar</div>
            </div>
            <a href='#'><Button handleClick={this.handleClick} clicked={this.state.clicked}/></a>
          </div>
          <div>
            <div>{this.props.ticketType} {this.props.ticket}</div>
          </div>
        </div>
      );
    }
  }
}

export default AppContainer;
