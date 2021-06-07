import { SEARCH_TRACKS } from '../../../constants/types';

export const moveToTracks = tracks => {
  return {
    type: SEARCH_TRACKS,
    payload: tracks,
  };
};
