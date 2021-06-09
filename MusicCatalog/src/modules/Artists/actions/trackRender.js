import { SET_TRACKS } from '../../../constants/actionsTypes';

export const trackRender = tracks => {
  return {
    type: SET_TRACKS,
    payload: tracks,
  };
};
