import { combineReducers, createStore } from 'redux';
import clickReducer from './reducers/clickReducer';
import typeReducer from './reducers/typeReducer';

const rootReducers = combineReducers({
  clickReducer,
  typeReducer
})

const initialState = {}

const store = createStore(
  rootReducers,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);

export default store;