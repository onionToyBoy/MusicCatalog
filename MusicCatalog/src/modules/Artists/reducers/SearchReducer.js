import {SEARCH_ARTISTS} from '../../../constants/types';

const INITIAL_STATE = {
  artists: [],
};

export const SearchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_ARTISTS:
      return {
        ...state,
        artists: action.payload,
      };
    default:
      return state;
  }
};
