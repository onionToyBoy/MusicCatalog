import { SET_ALBUMS } from '../../../constants/types';

export const moveToAlbums = albums => {
  return {
    type: SET_ALBUMS,
    payload: albums,
  };
};
