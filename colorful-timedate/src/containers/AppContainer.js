import React, { Component } from 'react';
import TimeContainer from './TimeContainer.js'
import ColorBlock from '../components/ColorBlock.js'
import Button from '../components/Button.js'

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
      clicked: true
    })
  }

  render() {
    return (
      <div className="app-container">

        <div className='time-block-wrapper'>
          <TimeContainer handleClick={this.handleClick}/>
          <ColorBlock handleClick={this.handleClick}/>
        </div>
        <Button handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default AppContainer;
