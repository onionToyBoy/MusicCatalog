import { SET_ALBUMS } from '../../../constants/actionsTypes';

const INITIAL_STATE = {
  albums: [],
};

export const albums = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ALBUMS:
      return {
        ...state,
        albums: action.payload,
      };
    default:
      return state;
  }
};
