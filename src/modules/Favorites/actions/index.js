import {
  REMOVE_FAVORITE_ALBUM,
  SET_FAVORITE_ALBUM,
  SET_FAVORITE_TRACK,
  REMOVE_FAVORITE_TRACK,
} from '../../../constants/actionsTypes';

export const setFavoriteAlbum = (albumId, tracks, album) => ({
  type: SET_FAVORITE_ALBUM,
  payload: {
    albumId,
    tracks,
    album,
  },
});

export const removeFavoriteAlbum = albumId => ({
  type: REMOVE_FAVORITE_ALBUM,
  payload: {
    albumId,
  },
});

export const setFavoriteTrack = (albumId, album, track) => ({
  type: SET_FAVORITE_TRACK,
  payload: {
    albumId,
    album,
    track,
  },
});

export const removeFavoriteTrack = (albumId, trackId) => ({
  type: REMOVE_FAVORITE_TRACK,
  payload: {
    albumId,
    trackId,
  },
});
