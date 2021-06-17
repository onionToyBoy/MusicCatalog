import {
  SET_ALBUMS,
  SET_ARTISTS,
  SET_TRACKS,
  SET_LOADING_STATUS,
  SET_ERROR_STATUS,
} from '../../../constants/actionsTypes';

export const setAlbums = (albums, artistId) => ({
  type: SET_ALBUMS,
  payload: {
    albums: albums,
    artistId: artistId,
  },
});

export const setArtists = artists => {
  return {
    type: SET_ARTISTS,
    payload: artists,
  };
};

export const setTracks = (tracks, albumId) => ({
  type: SET_TRACKS,
  payload: {
    tracks: tracks,
    albumId: albumId,
  },
});

export const setLoadingStatus = isLoading => ({
  type: SET_LOADING_STATUS,
  payload: isLoading,
});

export const setErrorStatus = isError => ({
  type: SET_ERROR_STATUS,
  payload: isError,
});
