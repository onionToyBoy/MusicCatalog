import { SET_ALBUMS, SET_ARTISTS, SET_TRACKS } from '../../../constants/actionsTypes';

export const setAlbums = albums => {
  return {
    type: SET_ALBUMS,
    payload: albums,
  };
};

export const setArtists = artists => {
  return {
    type: SET_ARTISTS,
    payload: artists,
  };
};

export const setTracks = tracks => {
  return {
    type: SET_TRACKS,
    payload: tracks,
  };
};
