import { combineReducers } from 'redux';
import { artistsReducer } from '../modules/Artists/reducers';
import { notificationReducer } from '../modules/Notifications/reducers';

export const rootReducer = combineReducers({
  artistsReducer,
  notificationReducer,
});
