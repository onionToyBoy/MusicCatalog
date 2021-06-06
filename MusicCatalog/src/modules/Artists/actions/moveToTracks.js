import { SEARCH_TRACKS } from '../../../constants/types';

export const moveToAlbums = tracks => {
  return {
    type: SEARCH_TRACKS,
    payload: tracks,
  };
};
