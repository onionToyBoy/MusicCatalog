import { REMOVE_FAVORITE_ALBUM, SET_FAVORITE_ALBUM } from '../../../constants/actionsTypes';

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
