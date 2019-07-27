import { combineReducers } from 'redux';
import settings from './settings.reducer';
import authReducer from './auth.reducer';
import transactionsReducer from './transactions.reducer';
import dashboardSidebar from './dashboard-sidebar.reducer.js';

const rootReducer = combineReducers({
  settings,
  authReducer,
  transactionsReducer,
  dashboardSidebar
});

export default rootReducer;
