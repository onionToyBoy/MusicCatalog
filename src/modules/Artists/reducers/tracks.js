import { SET_TRACKS } from '../../../constants/actionsTypes';

const INITIAL_STATE = {
  tracks: {},
};

export const tracks = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
