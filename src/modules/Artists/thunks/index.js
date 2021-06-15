import { searchArtists } from '../../../requests/searchArtists';
import { endOfLoading, setAlbums, setArtists, setTracks, startOfLoading } from '../actions';
import { getSpecificTracks } from '../../../requests/getSpecificTracks';
import { getSpecificAlbums } from '../../../requests/getSpecificAlbums';

export function searchArtist(searchValue = 'artist') {
  return async dispatch => {
    try {
      dispatch(startOfLoading());
      const artists = await searchArtists(searchValue);
      dispatch(setArtists(artists.results));
      dispatch(endOfLoading());
    } catch {
      console.log('error');
    }
  };
}

export function getAlbums(artistId) {
  return async dispatch => {
    try {
      dispatch(startOfLoading());
      const albums = await getSpecificAlbums(artistId);
      dispatch(setAlbums(albums.results.slice(1), artistId));
      dispatch(endOfLoading());
    } catch {
      console.log('error');
    }
  };
}

export function getTracks(albumId) {
  return async dispatch => {
    try {
      dispatch(startOfLoading());
      const albums = await getSpecificTracks(albumId);
      dispatch(setTracks(albums.results.slice(1), albumId));
      dispatch(endOfLoading());
    } catch {
      console.log('error');
    }
  };
}
