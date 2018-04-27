import { combineReducers, createStore } from 'redux';
import clickReducer from './reducers/clickReducer';

const initialState = {
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

const store = createStore(
  clickReducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);

export default store;