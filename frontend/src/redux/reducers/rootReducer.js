import { combineReducers } from 'redux';
import authReducer from './authReducer';
import bookReducer from './bookReducers';

export default combineReducers({ auth: authReducer, books: bookReducer });