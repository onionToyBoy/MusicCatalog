import { searchArtists } from '../../../requests/searchArtists';
import { setAlbums, setArtists, setErrorStatus, setTracks, setLoadingStatus } from '../actions';
import { getSpecificTracks } from '../../../requests/getSpecificTracks';
import { getSpecificAlbums } from '../../../requests/getSpecificAlbums';

export function searchArtist(searchValue) {
  return async dispatch => {
    try {
      dispatch(setLoadingStatus(true));
      const artists = await searchArtists(searchValue);
      dispatch(setArtists(artists.results));
      dispatch(setLoadingStatus(false));
    } catch (err) {
      dispatch(setErrorStatus(true));
    } finally {
      dispatch(setLoadingStatus(false));
    }
  };
}

export function getAlbums(artistId) {
  return async dispatch => {
    try {
      dispatch(setLoadingStatus(true));
      const albums = await getSpecificAlbums(artistId);
      dispatch(setAlbums(albums.results.slice(1), artistId));
      dispatch(setLoadingStatus(false));
    } catch (err) {
      dispatch(setErrorStatus(true));
    } finally {
      dispatch(setLoadingStatus(false));
    }
  };
}

export function getTracks(albumId) {
  return async dispatch => {
    try {
      dispatch(setLoadingStatus(true));
      const albums = await getSpecificTracks(albumId);
      dispatch(setTracks(albums.results.slice(1), albumId));
      dispatch(setLoadingStatus(false));
    } catch (err) {
      dispatch(setErrorStatus(true));
    } finally {
      dispatch(setLoadingStatus(false));
    }
  };
}
