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
  render () {
    return (
      <Provider store={ store }>
        <div className="App">
          <Redirect to='/' />
          <Route exact path="/" component={BuyTickets}/>
          <Route exact path="/origin" render={() => <Origin/>}/>
          <Route exact path="/destination" render={() => <Destination/>}/>
          <Route exact path="/ticket-type" render={() => <TicketType/>}/>
          <Route exact path="/ten-trip" render={() => <TenTrip/>}/>
          <Route exact path="/monthly" render={() => <Monthly/>}/>
          <Route exact path="/one-way" render={() => <OneWay/>}/>
          <Route exact path="/round-trip" render={() => <RoundTrip/>}/>
          <Route exact path="/weekly" render={() => <Weekly/>}/>
          <Route exact path="/accept" render={() => <Accept/>}/>
          <Route exact path="/payment-method" render={() => <PaymentMethod/>}/>
          <Route exact path="/card-info" render={() => <CardInfo/>}/>
          <Route exact path="/wallet" render={() => <Wallet/>}/>
          <Route exact path="/access" render={() => <AppContainer/>}/>
        </div>
      </Provider>
    );
  }
}

export default App;
