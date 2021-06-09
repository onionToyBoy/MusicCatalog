import { SET_ARTISTS } from '../../../constants/actionsTypes';

export const artistRender = artists => {
  return {
    type: SET_ARTISTS,
    payload: artists,
  };
};
