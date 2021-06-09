import { SET_ALBUMS } from '../../../constants/actionsTypes';

export const albumRender = albums => {
  return {
    type: SET_ALBUMS,
    payload: albums,
  };
};
