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
      const newFavorites = Object.entries(state.favorites).reduce(
        (acc, [key, value]) =>
          key !== action.payload.albumId.toString() ? { ...acc, [key]: value } : acc,
        {},
      );
      return {
        ...state,
        favorites: newFavorites,
      };
    }
    case SET_FAVORITE_TRACK: {
      const addTrack = track => {
        if (state.favorites[action.payload.albumId]) {
          const tracks = state.favorites[action.payload.albumId].tracks;
          tracks.push(track);
          return tracks;
        }
        return [track];
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
      const removeTrack = () => {
        const newTracks = state.favorites[action.payload.albumId].tracks.filter(
          track => track.trackId !== action.payload.trackId,
        );
        return newTracks;
      };

      const newFavorites = {
        ...state.favorites,
        [action.payload.albumId]: {
          albums: state.favorites[action.payload.albumId].albums,
          tracks: removeTrack(),
        },
      };
      return {
        ...state,
        favorites: newFavorites,
      };
    }

    default:
      return state;
  }
};
