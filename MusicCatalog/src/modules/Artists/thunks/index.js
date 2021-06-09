import { searchArtists } from '../../../requests/searchArtists';
import {artistRender } from '../actions/artistRender';
import { albumRender } from '../actions/albumRender';
import { getSpecificTracks } from '../../../requests/getSpecificTracks';
import { getSpecificAlbums } from '../../../requests/getSpecificAlbums';
import { trackRender } from '../actions/trackRender';

export function searchArtist(searchValue = 'artist') {
  return async dispatch => {
    try {
      const artists = await searchArtists(searchValue);
      dispatch(artistRender(artists.results));
    } catch {
      console.log('error');
    }
  };
}

export function getAlbums(artistId) {
  return async dispatch => {
    try {
      const albums = await getSpecificAlbums(artistId);
      dispatch(albumRender(albums.results.slice(1)));
    } catch {
      console.log('error');
    }
  };
}

export function getTracks(albumId) {
  return async dispatch => {
    try {
      const albums = await getSpecificTracks(albumId);
      dispatch(trackRender(albums.results.slice(1)));
    } catch {
      console.log('error');
    }
  };
}
