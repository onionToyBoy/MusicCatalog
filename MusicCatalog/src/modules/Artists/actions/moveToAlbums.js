import { SEARCH_ALBUMS } from '../../../constants/types';

export const moveToAlbums = albums => {
  return {
    type: SEARCH_ALBUMS,
    payload: albums,
  };
};
