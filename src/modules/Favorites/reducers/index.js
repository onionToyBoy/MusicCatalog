import {
  REMOVE_FAVORITE_ALBUM,
  SET_FAVORITE_ALBUM,
  SET_FAVORITE_TRACK,
  REMOVE_FAVORITE_TRACK,
} from '../../../constants/actionsTypes';

export const INITIAL_STATE = {
  favorites: {},
};

export const favoriteAlbumsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FAVORITE_ALBUM: {
      const newFavorites = {
        ...state.favorites,
        [action.payload.albumId]: {
          album: action.payload.album,
          tracks: action.payload.tracks,
        },
      };

      return {
        ...state,
        favorites: newFavorites,
      };
    }
    case REMOVE_FAVORITE_ALBUM: {
      const { [action.payload.albumId]: album, ...albums } = state.favorites;
      return {
        ...state,
        favorites: albums,
      };
    }
    case SET_FAVORITE_TRACK: {
      const addTrack = track => {
        if (state.favorites[action.payload.albumId]) {
          const tracks = state.favorites[action.payload.albumId].tracks;
          tracks.push(action.payload.track);
          return tracks;
        }
        return [action.payload.track];
      };
      const newFavorites = {
        ...state.favorites,
        [action.payload.albumId]: {
          album: action.payload.album,
          tracks: addTrack(action.payload.track),
        },
      };

      return {
        ...state,
        favorites: newFavorites,
      };
    }
    case REMOVE_FAVORITE_TRACK: {
      const { albumId, trackId } = action.payload;

      const newTracks = state.favorites[albumId].tracks.filter(track => track.trackId !== trackId);
      const { [albumId]: album, ...albums } = state.favorites;
      const newFavorites = {
        ...state.favorites,
        [albumId]: {
          ...album,
          tracks: newTracks,
        },
      };

      return {
        ...state,
        favorites: newTracks.length ? newFavorites : albums,
      };
    }

    default:
      return state;
  }
};
