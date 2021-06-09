import { SET_TRACKS } from '../../../constants/types';

const INITIAL_STATE = {
  tracks: {}, 
  artistId:'',
};

export const tracks = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TRACKS:
      return {
        ...state,
        tracks: action.payload,
      };
    default:
      return state;
  }
};