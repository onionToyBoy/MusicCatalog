import { SET_ALBUMS } from '../../../constants/actionsTypes';

const INITIAL_STATE = {
  albums: {},
};

export const albums = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ALBUMS: {
      const updatedAlbums = { ...state.albums, [action.artistName]: action.payload };

      return {
        ...state,
        albums: updatedAlbums,
      };
    }
    default:
      return state;
  }
};
