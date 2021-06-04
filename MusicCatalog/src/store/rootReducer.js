import { combineReducers } from 'redux';
import { artists } from '../modules/Artists/reducers/atists';
import { albums } from '../modules/Artists/reducers/albums';

export const rootReducer = combineReducers({
  search: artists,
  goTo: albums,
});
