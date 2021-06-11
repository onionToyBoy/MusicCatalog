import { SET_ALBUMS, SET_ARTISTS, SET_TRACKS } from '../../../constants/actionsTypes';

export const setAlbums = (albums, artistName) => {
  return {
    type: SET_ALBUMS,
    payload: albums,
    artistName: artistName,
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
