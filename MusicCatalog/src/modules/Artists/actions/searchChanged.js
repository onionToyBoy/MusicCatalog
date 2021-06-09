import { SET_ARTISTS } from '../../../constants/types';

export const searchChanged = artists => {
  return {
    type: SET_ARTISTS,
    payload: artists,
  };
};
