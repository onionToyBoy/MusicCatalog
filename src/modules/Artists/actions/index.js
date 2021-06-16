import {
  SET_ALBUMS,
  SET_ARTISTS,
  SET_TRACKS,
  START_OF_LOADING,
  END_OF_LOADING,
  SET_ERROR,
  REMOVE_ERROR,
} from '../../../constants/actionsTypes';

export const setAlbums = (albums, artistId) => {
  return {
    type: SET_ALBUMS,
    payload: {
      albums: albums,
      artistId: artistId,
    },
  };
};

export const setArtists = artists => {
  return {
    type: SET_ARTISTS,
    payload: artists,
  };
};

export const setTracks = (tracks, albumId) => {
  return {
    type: SET_TRACKS,
    payload: {
      tracks: tracks,
      albumId: albumId,
    },
  };
};

export const startOfLoading = () => {
  return {
    type: START_OF_LOADING,
  };
};

export const endOfLoading = () => {
  return {
    type: END_OF_LOADING,
  };
};

export const setError = error => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};

export const removeError = () => {
  return {
    type: REMOVE_ERROR,
  };
};
