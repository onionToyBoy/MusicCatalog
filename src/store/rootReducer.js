import { combineReducers } from 'redux';
import { artists } from '../modules/Artists/reducers/atists';
import { albums } from '../modules/Artists/reducers/albums';
import { tracks } from '../modules/Artists/reducers/tracks';

export const rootReducer = combineReducers({
  artistReducer: artists,
  albumReducer: albums,
  trackReducer: tracks,
});
