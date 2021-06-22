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
      const updatedAlbums = albums.results.slice(1);

      dispatch(setAlbums(updatedAlbums, artistId));
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

      const tracks = await getSpecificTracks(albumId);
      const updatedTracks = tracks.results.slice(1);

      dispatch(setTracks(updatedTracks, albumId));
    } catch (err) {
      dispatch(setErrorStatus(true));
    } finally {
      dispatch(setLoadingStatus(false));
    }
  };
}
