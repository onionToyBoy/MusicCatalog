import { SEARCH_ALBUMS } from '../../../constants/types';

const INITIAL_STATE = {
  albums: [],
};

export const albums = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_ALBUMS:
      return {
        ...state,
        albums: action.payload,
      };
    default:
      return state;
  }
};
