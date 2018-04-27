import { combineReducers, createStore } from 'redux';
import clickReducer from './reducers/clickReducer';
import typeReducer from './reducers/typeReducer';

const allReducers = combineReducers({
  clickedOrigin: clickReducer.clickOriginReducer,
  clickedDestination: clickReducer.clickedDestinationReducer,
  origin: typeReducer.typeOriginReducer,
  destination: typeReducer.typeDestinationReducer
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
  allReducers,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);

export default store;