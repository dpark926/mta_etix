import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Origin from './components/Origin.js'
import Destination from './components/Destination.js'
import AppContainer from './containers/AppContainer.js'
import Activate from './components/Activate.js'
import BuyTickets from './components/BuyTickets.js'
import TicketType from './components/TicketType.js'
import TicketCost from './components/TicketCost.js'
import Accept from './components/Accept.js'
import PaymentMethod from './components/PaymentMethod.js'
import CardInfo from './components/CardInfo.js'

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

  render () {
    return (
      <div className="App container-fluid">
        <Redirect to='/buytickets' />
        <Route path="/buytickets" component={BuyTickets}/>
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
        <Route path="/ticket-type" component={TicketType}/>
        <Route path="/ticket-cost" component={TicketCost}/>
        <Route path="/payment-method" component={PaymentMethod}/>
        <Route path="/card-info" component={CardInfo}/>
        <Route path="/activate" component={Activate}/>
        <Route path="/access" component={AppContainer}/>
      </div>
    );
  }
}

export default App;
