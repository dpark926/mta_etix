import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import '../styles/App.css';
import Origin from './components/Origin.js';
import Destination from './components/Destination.js';
import AppContainer from './containers/AppContainer.js';
import BuyTickets from './components/BuyTickets.js';
import TicketType from './components/TicketType.js';
import TenTrip from './components/ticketTypes/TenTrip.js';
import Monthly from './components/ticketTypes/Monthly.js';
import OneWay from './components/ticketTypes/OneWay.js';
import RoundTrip from './components/ticketTypes/RoundTrip.js';
import Weekly from './components/ticketTypes/Weekly.js';
import Accept from './components/Accept.js';
import Wallet from './components/Wallet.js';
import PaymentMethod from './components/PaymentMethod.js';
import CardInfo from './components/CardInfo.js';

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

  // handleTicket = (event) => {
  //   let id = event.currentTarget.id.split(", ")
  //
  //   this.setState({
  //     ticket: id[0],
  //     cost: id[1],
  //   })
  // }

  handleSecCode = (event) => {
    this.setState({
      secCode: event.target.value
    })
  }


  render () {
    console.log(store.getState());
    return (
      <Provider store={ store }>
        <div className="App">
          <Redirect to='/buytickets' />
          <Route path="/buytickets" component={BuyTickets}/>
          <Route path="/origin" render={() => <Origin/>}/>
          <Route path="/destination" render={() => <Destination/>}/>
          <Route path="/ticket-type" render={() => <TicketType/>}/>
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
          <Route path="/accept" render={() => <Accept
            clickedOrigin={this.state.clickedOrigin}
            clickedDestination={this.state.clickedDestination}
            ticketType={this.state.ticketType}
            ticket={this.state.ticket}/>}
          />
          <Route path="/payment-method" render={() => <PaymentMethod
            clickedOrigin={this.state.clickedOrigin}
            clickedDestination={this.state.clickedDestination}
            ticketType={this.state.ticketType}
            cost={this.state.cost}
            ticket={this.state.ticket}/>}
          />
          <Route path="/card-info" render={() => <CardInfo
            clickedOrigin={this.state.clickedOrigin}
            clickedDestination={this.state.clickedDestination}
            ticketType={this.state.ticketType}
            cost={this.state.cost}
            handleSecCode={this.handleSecCode}
            secCode={this.state.secCode}
            ticket={this.state.ticket}/>}
          />
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
      </Provider>
    );
  }
}

export default App;
