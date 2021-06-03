import {SEARCH_ARTISTS} from '../../../constants/types';

export const searchChanged = artists => {
  return {
    type: SEARCH_ARTISTS,
    payload: artists,
  };
};
