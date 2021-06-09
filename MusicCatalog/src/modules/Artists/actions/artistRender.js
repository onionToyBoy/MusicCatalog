import { SET_ARTISTS } from '../../../constants/types';

export const artistRender = artists => {
  return {
    type: SET_ARTISTS,
    payload: artists,
  };
};
