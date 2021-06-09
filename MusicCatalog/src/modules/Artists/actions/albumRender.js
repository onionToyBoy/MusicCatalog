import { SET_ALBUMS } from '../../../constants/types';

export const albumRender = albums => {
  return {
    type: SET_ALBUMS,
    payload: albums,
  };
};
