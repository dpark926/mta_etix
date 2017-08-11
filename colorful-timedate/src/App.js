import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Origin from './components/Origin.js'
import Destination from './components/Destination.js'
import AppContainer from './containers/AppContainer.js'
import Activate from './components/Activate.js'
import './styles/Activate.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      activate: false,
      origin: '',
      destination: '',
    }

    this.handleActivate = this.handleActivate.bind(this)
  }

  handleActivate() {
    this.setState({
      activate: true
    })
  }

  // render() {
  //   if (this.state.activate === false) {
  //     return (
  //       <div className="activate-main">
  //         <Activate handleActivate={this.handleActivate}/>
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div className="App">
  //         {/* <div className="App-header">
  //           <img src={logo} className="App-logo" alt="logo" />
  //           <h2>Welcome to React</h2>
  //         </div>
  //         <p className="App-intro">
  //           To get started, edit <code>src/App.js</code> and save to reload.
  //         </p> */}
  //
  //         {/* <div className='time-block-wrapper'>
  //           <TimeContainer/>
  //           <ColorBlock/>
  //         </div>
  //         <Button/> */}
  //         <Redirect to='/' />
  //         <Route path="/origin" component={Origin}/>
  //         <Route path="/destination" component={Destination}/>
  //         <Route path="/access" component={AppContainer}/>
  //       </div>
  //     );
  //   }
  // }
  render () {
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
        {/* <Redirect to='/origin' /> */}
        <Route path="/origin" component={Origin}/>
        <Route path="/destination" component={Destination}/>
        <Route path="/activate" component={Activate}/>
        <Route path="/access" component={AppContainer}/>
      </div>
    );
  }
}

export default App;
