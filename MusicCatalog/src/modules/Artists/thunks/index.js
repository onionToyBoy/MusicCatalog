import { getSpecificAlbums } from '../../../requests/getSpecificAlbums';
import { searchArtists } from '../../../requests/searchArtists';
import { searchChanged } from '../actions/searchChanged';
import { moveToAlbums } from '../actions/moveToAlbums';

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

export function getAlbums(artistId) {
  return async dispatch => {
    try {
      const albums = await getSpecificAlbums(artistId);
      dispatch(moveToAlbums(albums));
    } catch {
      console.log('error');
    }
  };
}
