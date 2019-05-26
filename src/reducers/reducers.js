import { combineReducers } from 'redux';
import settings from './settings.reducer';
import auth from './auth.reducer';
import dashboardSidebar from './dashboard-sidebar.reducer.js';

const rootReducer = combineReducers({
  settings,
  auth,
  dashboardSidebar
});

export default rootReducer;
