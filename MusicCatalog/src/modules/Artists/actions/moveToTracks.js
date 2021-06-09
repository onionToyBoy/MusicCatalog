import { SET_TRACKS } from '../../../constants/types';

export const moveToTracks = tracks => {
  return {
    type: SET_TRACKS,
    payload: tracks,
  };
};
