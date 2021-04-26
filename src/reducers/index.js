import { combineReducers } from 'redux';
import fruitsReducer from './fruitsReducer'
import drinksReducer from './drinksReducer'

const rootReducer = combineReducers({ 
  fruitsReducer,
  drinksReducer
});

export default rootReducer