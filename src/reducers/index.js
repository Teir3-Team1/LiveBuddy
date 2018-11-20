// This file will be the entry point for all reducers
// Import all reducers here then use combineReducers function to combine them
// Export combineReducers function

import { combineReducers } from 'redux';

import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer
});
