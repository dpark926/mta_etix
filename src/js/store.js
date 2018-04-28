import { combineReducers, createStore } from 'redux';
import clickReducer from './reducers/clickReducer';
import typeReducer from './reducers/typeReducer';

const rootReducers = combineReducers({
  clickReducer,
  typeReducer
})

const initialState = {
  activate: false,
  clickedOrigin: '',
  clickedDestination: '',
  origin: '',
  destination: '',
  ticketType: '',
  ticket: '',
  cost: '',
  secCode: ''
}

const store = createStore(
  rootReducers,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);

export default store;