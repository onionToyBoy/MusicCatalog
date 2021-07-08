import { SET_ARTISTS, SET_ALBUMS, SET_TRACKS } from '../../../constants/actionsTypes';

export const INITIAL_STATE = {
  artists: [],
  albums: {},
  tracks: {},
};

export const artistsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ARTISTS:
      return {
        ...state,
        artists: action.payload,
      };
    case SET_ALBUMS: {
      const updatedAlbums = { ...state.albums, [action.payload.artistId]: action.payload.albums };

      return {
        ...state,
        albums: updatedAlbums,
      };
    }
    case SET_TRACKS: {
      const updatedTracks = { ...state.tracks, [action.payload.albumId]: action.payload.tracks };

      return {
        ...state,
        tracks: updatedTracks,
      };
    }
    default:
      return state;
  }
};
