import { searchArtists } from '../../../requests/searchArtists';
import { setAlbums, setArtists, setTracks } from '../actions';
import { getSpecificTracks } from '../../../requests/getSpecificTracks';
import { getSpecificAlbums } from '../../../requests/getSpecificAlbums';

export function searchArtist(searchValue = 'artist') {
  return async dispatch => {
    try {
      const artists = await searchArtists(searchValue);
      dispatch(setArtists(artists.results));
    } catch {
      console.log('error');
    }
  };
}

export function getAlbums(artistId, artistName) {
  return async dispatch => {
    try {
      const albums = await getSpecificAlbums(artistId, artistName);
      dispatch(setAlbums(albums.results.slice(1), artistName));
    } catch {
      console.log('error');
    }
  };
}

export function getTracks(albumId) {
  return async dispatch => {
    try {
      const albums = await getSpecificTracks(albumId);
      dispatch(setTracks(albums.results.slice(1)));
    } catch {
      console.log('error');
    }
  };
}
