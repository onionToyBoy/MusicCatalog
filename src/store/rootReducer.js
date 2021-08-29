import { combineReducers } from 'redux';
import { artistsReducer } from '../modules/Artists/reducers';
import { notificationReducer } from '../modules/Notifications/reducers';
import { favoriteAlbumsReducer } from '../modules/Favorites/reducers';

export const rootReducer = combineReducers({
  artistsReducer,
  notificationReducer,
  favoriteAlbumsReducer,
});
