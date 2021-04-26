import { combineReducers } from 'redux';
import parksReducer from './parksReducer'

const rootReducer = combineReducers({ 
  parksReducer,
//   drinksReducer
});

export default rootReducer