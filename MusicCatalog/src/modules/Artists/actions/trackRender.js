import { SET_TRACKS } from '../../../constants/types';

export const trackRender = tracks => {
  return {
    type: SET_TRACKS,
    payload: tracks,
  };
};
