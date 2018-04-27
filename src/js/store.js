import { combineReducers, createStore } from 'redux';
import clickReducer from './reducers/clickReducer';
import typeReducer from './reducers/typeReducer';

const allReducers = combineReducers({
  clickReducer: clickReducer,
  typeReducer: typeReducer
})

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
  allReducers,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);

export default store;