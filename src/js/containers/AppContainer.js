import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import handleClick from '../actions/clickActions';
import TimeContainer from './TimeContainer.js';
import ColorBlock from '../components/ColorBlock.js';
import Button from '../components/Button.js';
import Barcode from '../components/Barcode.js';
import '../../styles/AppContainer.css';
import mtaLogoBlue from '../../styles/imgs/mtaLogo.svg';
import mtaLogoWht from '../../styles/imgs/mta-02.png';

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
      month: (new Date()).getMonth(),
      hour: (new Date()).getHours(),
      block1: divStyle[0],
      block2: divStyle[1],
      block3: divStyle[2],
      colorToggle1: false,
      colorToggle2: false,
      colorToggle3: false,
      showActivate: true
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

  toggleColor1 = () => {
    this.setState({
      colorToggle1: !this.state.colorToggle1
    })
  }

  toggleColor2 = () => {
    this.setState({
      colorToggle2: !this.state.colorToggle2
    })
  }

  toggleColor3 = () => {
    this.setState({
      colorToggle3: !this.state.colorToggle3
    })
  }

  nextTicketType = (ticketType) => {
    this.props.handleNextTicketType(ticketType);
  }

  switchDestinations = () => {
    this.props.switchDestinations(this.props.clickReducer.clickedOrigin, this.props.clickReducer.clickedDestination);
  }

  switchPeak = () => {
    this.props.switchPeak(this.props.clickReducer.ticket);
  }

  toggleActivate = () => {
    this.setState({
      showActivate: !this.state.showActivate
    })
  }

  render() {
    const {
      block1,
      block2,
      block3,
      colorToggle1,
      colorToggle2,
      colorToggle3,
      clicked,
      hour,
      activated
    } = this.state;
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "November",
      "December"
    ];
    const thisMonth = months[this.state.month];
    const excludeHour = [0, 10, 11, 12, 22, 23];

    if (clicked === false) {
      return (
        <div className="app-container">
          <div className="location-header nav justify-content-center" style={{paddingTop: '20px'}}>
            <Link to="/wallet">
              <div className="location-header-arrow fa fa-arrow-left" style={{fontSize: "1.5em"}}></div>
            </Link>
            <h2 className="location-header-text">{ this.props.clickReducer.ticketType} { this.props.clickReducer.ticketType === 'Monthly' ? null : this.props.clickReducer.ticket}</h2>
          </div>
          <div className='time-block-button-wrapper'>
            <div className='time-block-wrapper'>
              <TimeContainer handleClick={this.handleClick}/>
              <ColorBlock
                handleClick={this.handleClick}
                block1={block1}
                block2={block2}
                block3={block3}
                colorToggle1={colorToggle1}
                colorToggle2={colorToggle2}
                colorToggle3={colorToggle3}
                handleChangeComplete1={this.handleChangeComplete1}
                handleChangeComplete2={this.handleChangeComplete2}
                handleChangeComplete3={this.handleChangeComplete3}
                toggleColor1={this.toggleColor1}
                toggleColor2={this.toggleColor2}
                toggleColor3={this.toggleColor3}
              />
              <div className='tap-button'>Tap to reveal barcode</div>
            </div>
            <div style={{paddingBottom: 5, backgroundColor: '#f1f1f1'}}>
              <a href='#'><Button handleClick={ this.handleClick } clicked={ clicked }/></a>
            </div>
          </div>
          <div className="app-container-lower">
            { this.state.showActivate && <div className='ticket-activated-at' onClick={this.toggleActivate}>
              Ticket activated at { excludeHour.includes(hour) ? activated.slice(0, 5) : activated.slice(0, 4) } { activated.slice(-2) }
            </div>}
            <div className='ticket-type-info' onClick={this.switchPeak}>
              { this.props.clickReducer.ticketType } { this.props.clickReducer.ticketType === 'Monthly' ? " - " + thisMonth : this.props.clickReducer.ticket }
            </div>
            <div className='lirr'>Long Island Rail Road</div>
            <div className='ticket-area-code' style={{backgroundColor: this.props.clickReducer.ticketType === "Monthly" ? '#F5EFCF' : '#D9EBEF'}}>
              <div className={`mtaLogo-bg ${this.props.clickReducer.ticketType === "Monthly" ? 'wht-logo' : ''}`}>
                <img src={this.props.clickReducer.ticketType === "Monthly" ? mtaLogoWht : mtaLogoBlue }></img>
              </div>
              <div className='ticket-area-code-wrapper1' onClick={this.switchDestinations}>
                <div className='ticket-area-code-origindest'>{ this.props.clickReducer.clickedOrigin }</div>
                { this.props.clickReducer.clickedOrigin === "Penn Station" ? <div className='ticket-area-code-areanum'>1</div> : <div className='ticket-area-code-areanum'>3</div>}
                <div className='ticket-area-code-origindest'>{ this.props.clickReducer.clickedDestination }</div>
                { this.props.clickReducer.clickedDestination === "Penn Station" ? <div className='ticket-area-code-areanum'>1</div> : <div className='ticket-area-code-areanum'>3</div>}
              </div>
              { this.props.clickReducer.ticketType === "Monthly" &&
                <div className='ticket-area-code-month'>
                  <div className='ticket-area-code-month-wrapper' onClick={() => {this.nextTicketType('One-Way')}}>
                    { thisMonth.slice(0, 3).split("").map( letter => <div className='ticket-area-code-letter'>{letter.toUpperCase()}</div>) }
                  </div>
                </div>
              }
              { this.props.clickReducer.clickedOrigin === "Penn Station" &&
                this.props.clickReducer.ticketType !== "Monthly" &&
                <div className='ticket-area-code-wrapper2'>
                  <div className='ticket-area-code-circle-bottom' onClick={() => {this.nextTicketType('Monthly')}}>
                    <div className='ticket-area-code-circle-inner-bottom'>{ this.props.clickReducer.ticket.split("").slice(0, 1) }</div>
                  </div>
                </div>
              }
              { this.props.clickReducer.clickedOrigin !== "Penn Station" &&
                this.props.clickReducer.ticketType !== "Monthly" &&
                <div className='ticket-area-code-wrapper2'>
                  <div className='ticket-area-code-circle-top' onClick={() => {this.nextTicketType('Monthly')}}>
                    <div className='ticket-area-code-circle-inner-top'>{ this.props.clickReducer.ticket.split("").slice(0, 1) }</div>
                  </div>
                </div>
              }
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
            <h2 className="location-header-text"> {this.props.clickReducer.ticketType } {this.props.clickReducer.ticket}</h2>
          </div>
          <div className='time-block-button-wrapper animated slideInUp'>
            <div className='time-block-wrapper'>
              <Barcode/>
              <div className='tap-button'>Tap to reveal color bar</div>
            </div>
            <a href='#'><Button handleClick={ this.handleClick} clicked={ clicked }/></a>
          </div>
          <div>
            <div>{ this.props.clickReducer.ticketType } { this.props.clickReducer.ticket }</div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {
  handleNextTicketType: handleClick.handleNextTicketType,
  switchDestinations: handleClick.switchDestinations,
  switchPeak: handleClick.switchPeak
}

export default connect( mapStateToProps, mapActionsToProps )( AppContainer );
