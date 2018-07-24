import { combineReducers } from 'redux';
// Import Reducers here -->
import items from './itemReducer.js';
import heroes from './heroReducer.js';
import accounts from './accountReducer.js';
import general from './generalReducer.js';

// Default State
export default combineReducers({
  general,
  accounts,
  items,
  heroes
});
