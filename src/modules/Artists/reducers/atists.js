import { SET_ARTISTS } from '../../../constants/actionsTypes';

const INITIAL_STATE = {
  artists: [],
  tabNotification: '',
};

export const artists = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ARTISTS:
      return {
        ...state,
        artists: action.payload,
      };
    default:
      return state;
  }
};
