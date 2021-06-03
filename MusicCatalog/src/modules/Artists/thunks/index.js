import {searchArtists} from '../../../requests/searchArtists';
import {searchChanged} from '../actions/searchChanged';

export function searchArtist(searchValue = 'artist') {
  return async dispatch => {
    try {
      const artists = await searchArtists(searchValue);
      dispatch(searchChanged(artists));
    } catch {
      console.log('error');
    }
  };
}
