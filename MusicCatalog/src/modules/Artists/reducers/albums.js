import { SET_ALBUMS } from '../../../constants/actionsTypes';

const INITIAL_STATE = {
  albums: {},
  artistName:'',
};

export const albums = (state = INITIAL_STATE, action) => {
  const albums={};
  albums[action.artistName] = action.payload

  switch (action.type) {
    case SET_ALBUMS:
      return {
        ...state,
        albums: albums,
        artistName: action.artistName,
      };
    default:
      return state;
  }
};
