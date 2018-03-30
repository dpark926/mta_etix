import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Origin from './components/Origin.js'
import Destination from './components/Destination.js'
import AppContainer from './containers/AppContainer.js'
import BuyTickets from './components/BuyTickets.js'
import TicketType from './components/TicketType.js'
import TenTrip from './components/ticketTypes/TenTrip.js'
import Monthly from './components/ticketTypes/Monthly.js'
import OneWay from './components/ticketTypes/OneWay.js'
import RoundTrip from './components/ticketTypes/RoundTrip.js'
import Weekly from './components/ticketTypes/Weekly.js'
import Accept from './components/Accept.js'
import Wallet from './components/Wallet.js'
import PaymentMethod from './components/PaymentMethod.js'
import CardInfo from './components/CardInfo.js'

// import './styles/Activate.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      activate: false,
      origin: '',
      destination: '',
      clickedOrigin: '',
      clickedDestination: '',
      ticketType: '',
      ticket: '',
      cost: '',
      secCode: ''
    }
  }

  handleActivate = () => {
    this.setState({
      activate: true
    })
  }

  // search
  handleOrigin = (event) => {
    this.setState({
      origin: event.target.value
    })
  }

  // search
  handleDestination = (event) => {
    this.setState({
      destination: event.target.value
    })
  }

  handleClickedOrigin = (event) => {
    this.setState({
      clickedOrigin: event.target.id
    })
  }

  handleClickedDestination = (event) => {
    this.setState({
      clickedDestination: event.target.id
    })
  }

  handleTicketType = (event) => {
    this.setState({
      ticketType: event.target.id
    })
  }

  handleTicket = (event) => {
    let id = event.currentTarget.id.split(", ")

    this.setState({
      ticket: id[0],
      cost: id[1],
    })
  }

  handleSecCode = (event) => {
    this.setState({
      secCode: event.target.value
    })
  }


  render () {
    return (
      <div className="App">
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
          clickedOrigin={this.state.clickedOrigin}
          handleClickedDestination={this.handleClickedDestination}/>}
        />
        <Route path="/ticket-type" render={() => <TicketType
          clickedOrigin={this.state.clickedOrigin}
          clickedDestination={this.state.clickedDestination}
          handleTicketType={this.handleTicketType}/>}
        />
        {/* <Route path="/ten-trip" component={TicketCost}/> */}
        <Route path="/ten-trip" render={() => <TenTrip
          clickedOrigin={this.state.clickedOrigin}
          clickedDestination={this.state.clickedDestination}
          handleTicket={this.handleTicket}
          ticketType={this.state.ticketType}/>}
        />
        <Route path="/monthly" render={() => <Monthly
          clickedOrigin={this.state.clickedOrigin}
          clickedDestination={this.state.clickedDestination}
          handleTicket={this.handleTicket}
          ticketType={this.state.ticketType}/>}
        />
        <Route path="/one-way" render={() => <OneWay
          clickedOrigin={this.state.clickedOrigin}
          clickedDestination={this.state.clickedDestination}
          handleTicket={this.handleTicket}
          ticketType={this.state.ticketType}/>}
        />
        <Route path="/round-trip" render={() => <RoundTrip
          clickedOrigin={this.state.clickedOrigin}
          clickedDestination={this.state.clickedDestination}
          handleTicket={this.handleTicket}
          ticketType={this.state.ticketType}/>}
        />
        <Route path="/weekly" render={() => <Weekly
          clickedOrigin={this.state.clickedOrigin}
          clickedDestination={this.state.clickedDestination}
          handleTicket={this.handleTicket}
          ticketType={this.state.ticketType}/>}
        />
        {/* <Route path="/round-trip" component={TicketCost}/>
        <Route path="/weekly" component={TicketCost}/> */}

        {/* <Route path="/accept" component={Accept}/> */}
        <Route path="/accept" render={() => <Accept
          clickedOrigin={this.state.clickedOrigin}
          clickedDestination={this.state.clickedDestination}
          ticketType={this.state.ticketType}
          ticket={this.state.ticket}/>}
        />

        {/* <Route path="/payment-method" component={PaymentMethod}/> */}
        <Route path="/payment-method" render={() => <PaymentMethod
          clickedOrigin={this.state.clickedOrigin}
          clickedDestination={this.state.clickedDestination}
          ticketType={this.state.ticketType}
          cost={this.state.cost}
          ticket={this.state.ticket}/>}
        />
        {/* <Route path="/card-info" component={CardInfo}/> */}
        <Route path="/card-info" render={() => <CardInfo
          clickedOrigin={this.state.clickedOrigin}
          clickedDestination={this.state.clickedDestination}
          ticketType={this.state.ticketType}
          cost={this.state.cost}
          handleSecCode={this.handleSecCode}
          secCode={this.state.secCode}
          ticket={this.state.ticket}/>}
        />
        {/* <Route path="/wallet" component={Wallet}/> */}
        <Route path="/wallet" render={() => <Wallet
          clickedOrigin={this.state.clickedOrigin}
          clickedDestination={this.state.clickedDestination}
          ticketType={this.state.ticketType}
          handleSecCode={this.handleSecCode}
          secCode={this.state.secCode}
          ticket={this.state.ticket}/>}
        />
        <Route path="/access" render={() => <AppContainer
          ticketType={this.state.ticketType}
          ticket={this.state.ticket}
          clickedOrigin={this.state.clickedOrigin}
          clickedDestination={this.state.clickedDestination}/>}
        />
      </div>
    );
  }
}

export default App;
