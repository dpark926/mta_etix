import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TimeContainer from './containers/TimeContainer.js'
import ColorBlock from './components/ColorBlock.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div className='colorblock-wrapper'>
          <TimeContainer/>
          <div className='block1'><ColorBlock/></div>
          <div className='block2'><ColorBlock/></div>
          <div className='block3'><ColorBlock/></div>
        </div>
      </div>
    );
  }
}

export default App;
