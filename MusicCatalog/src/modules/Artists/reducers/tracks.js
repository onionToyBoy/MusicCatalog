import { SEARCH_TRACKS } from '../../../constants/types';

const INITIAL_STATE = {
  tracks: [],
};

export const tracks = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_TRACKS:
      return {
        ...state,
        tracks: action.payload,
      };
    default:
      return state;
  }
};