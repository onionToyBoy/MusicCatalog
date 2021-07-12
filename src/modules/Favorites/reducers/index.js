import { REMOVE_FAVORITE_ALBUM, SET_FAVORITE_ALBUM } from '../../../constants/actionsTypes';

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

    default:
      return state;
  }
};
