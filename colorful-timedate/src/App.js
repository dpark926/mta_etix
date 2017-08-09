import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AppContainer from './containers/AppContainer.js'
import Activate from './components/Activate.js'
import './styles/Activate.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      activate: false
    }

    this.handleActivate = this.handleActivate.bind(this)
  }

  handleActivate() {
    this.setState({
      activate: true
    })
  }

  render() {
    if (this.state.activate === false) {
      return (
        <div className="activate-main animated slideInDown">
          <Activate handleActivate={this.handleActivate}/>
        </div>
      )
    } else {
      return (
        <div className="App">
          {/* <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}

          {/* <div className='time-block-wrapper'>
            <TimeContainer/>
            <ColorBlock/>
          </div>
          <Button/> */}

          <AppContainer/>
        </div>
      );
    }
  }
}

export default App;
