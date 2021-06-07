import { combineReducers } from 'redux';
import { artists } from '../modules/Artists/reducers/atists';
import { albums } from '../modules/Artists/reducers/albums';
import { tracks } from '../modules/Artists/reducers/tracks';

export const rootReducer = combineReducers({
  search: artists,
  goToAlbums: albums,
  goToTracks: tracks,
});
