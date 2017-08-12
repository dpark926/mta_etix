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
      clickedOrigin: '',
    }

    this.handleActivate = this.handleActivate.bind(this)
    this.handleOrigin = this.handleOrigin.bind(this)
    this.handleDestination = this.handleDestination.bind(this)
    this.handleClickedOrigin = this.handleClickedOrigin.bind(this)
  }


  handleActivate() {
    this.setState({
      activate: true
    })
  }

  handleOrigin(event) {
    this.setState({
      origin: event.target.value
    })
  }

  handleDestination(event) {
    this.setState({
      destination: event.target.value
    })
  }

  handleClickedOrigin(event) {
    debugger
    this.setState({
      clickedOrigin: event.target.id
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
        <Redirect to='/origin' />
        <Route path="/origin" render={() => <Origin
          handleOrigin={this.handleOrigin}
          origin={this.state.origin}
          handleClickedOrigin={this.handleClickedOrigin}/>}
        />
        <Route path="/destination" render={() => <Destination
          handleDestination={this.handleDestination}
          destination={this.state.destination}
          clickedOrigin={this.state.clickedOrigin}/>}
        />
        <Route path="/activate" component={Activate}/>
        <Route path="/access" component={AppContainer}/>
      </div>
    );
  }
}

export default App;
